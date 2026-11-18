#!/usr/bin/env python3
"""Numerical test suite for the GLSL complex functions.

Runs every case of cases.py on the GPU (headless browser, WebGL2) and compares the
result with mpmath. See tests/README.md.

    python3 tests/run.py                 run everything
    python3 tests/run.py gamma bessel    only the tests whose name contains one of the words
    python3 tests/run.py --list          list the tests
    python3 tests/run.py -v theta        print every point
"""
import argparse
import json
import os
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
VENV = HERE / '.venv'


def bootstrap():
    """Install mpmath in tests/.venv when it is not available and re-run inside it."""
    try:
        import mpmath  # noqa: F401
        return
    except ImportError:
        pass
    if os.environ.get('FRACTURE_TESTS_BOOTSTRAPPED'):
        sys.exit('mpmath is missing and could not be installed: pip install -r tests/requirements.txt')
    python = VENV / ('Scripts/python.exe' if os.name == 'nt' else 'bin/python')
    if not python.exists():
        print('Creating %s and installing mpmath...' % VENV, file=sys.stderr)
        subprocess.check_call([sys.executable, '-m', 'venv', str(VENV)])
        subprocess.check_call([str(python), '-m', 'pip', 'install', '-q', '-r', str(HERE / 'requirements.txt')])
    env = dict(os.environ, FRACTURE_TESTS_BOOTSTRAPPED='1')
    sys.exit(subprocess.call([str(python), __file__] + sys.argv[1:], env=env))


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('patterns', nargs='*', help='substrings of the test names to run (default: all)')
    parser.add_argument('--tag', choices=['existing', 'new'], help='only the tests of this group')
    parser.add_argument('--list', action='store_true', help='list the selected tests and exit')
    parser.add_argument('-v', '--verbose', action='store_true', help='print every point (input, reference, result)')
    parser.add_argument('--failures-only', action='store_true', help='only print the failing tests')
    parser.add_argument('--browser', help='browser executable (default: first of firefox, chromium, chrome)')
    parser.add_argument('--chunk', type=int, default=6, help='tests per shader program (default: 6)')
    parser.add_argument('--tol-scale', type=float, default=1., help='multiply every tolerance by this factor')
    parser.add_argument('--timeout', type=int, default=180, help='seconds to wait for the browser (default: 180)')
    parser.add_argument('--json', metavar='FILE', help='write the results as JSON')
    args = parser.parse_args()

    bootstrap()
    sys.path.insert(0, str(HERE))
    import cases
    import harness

    tests = [t for t in cases.TESTS
             if (not args.patterns or any(p in t['name'] for p in args.patterns)) and (not args.tag or t['tag'] == args.tag)]
    if not tests:
        sys.exit('no test matches')
    for t in tests:
        t['tol'] *= args.tol_scale
    if args.list:
        for t in tests:
            print('%-8s %-22s %4d points  tol %.0e' % (t['tag'], t['name'], len(t['inputs']), t['tol']))
        return 0

    try:
        results = harness.run(tests, args.browser, args.chunk, args.timeout)
    except harness.InfrastructureError as e:
        print('error: %s' % e, file=sys.stderr)
        return 2

    color = sys.stdout.isatty()
    paint = lambda code, s: '\033[%sm%s\033[0m' % (code, s) if color else s
    for r in results:
        if r['passed'] and args.failures_only:
            continue
        status = paint('32', 'ok  ') if r['passed'] else paint('31', 'FAIL')
        line = '%s %-22s worst=%.1e tol=%.0e points=%d' % (status, r['name'], r['worst'], r['tol'], r['n'])
        if r['nan']:
            line += ' nan=%d' % r['nan']
        if r['skipped']:
            line += ' skipped=%d' % r['skipped']
        print(line)
        if r.get('error'):
            print('     shader error: %s' % r['error'].strip().replace('\n', '\n     ')[:1500])
        elif not r['passed'] and r['worst_at']:
            shown, ref, got = r['worst_at']
            print('     worst at %s\n       reference %.6g%+.6gj\n       got       %.6g%+.6gj' % (shown, ref.real, ref.imag, got.real, got.imag))
        if args.verbose:
            for shown, ref, got, err in r['points']:
                print('       %-34s ref %-24s got %-24s err %.1e' % (
                    shown, '%.5g%+.5gj' % (ref.real, ref.imag), '%.5g%+.5gj' % (got.real, got.imag), err))

    failed = [r for r in results if not r['passed']]
    print('\n%d passed, %d failed, %d total' % (len(results) - len(failed), len(failed), len(results)))
    if args.json:
        def clean(o):
            return None if isinstance(o, float) and o != o else o
        Path(args.json).write_text(json.dumps(
            [{k: clean(v) for k, v in r.items() if k not in ('points', 'worst_at')} for r in results], indent=1, default=str))
    return 1 if failed else 0


if __name__ == '__main__':
    sys.exit(main())
