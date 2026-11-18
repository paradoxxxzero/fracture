# Tests

```sh
npm test                 # everything
npm run test:formula     # formula compiler, no dependency except node (a few ms)
npm run test:shaders     # numerical tests of the GLSL functions (a few seconds)
```

## Shader tests (`run.py`)

Every case of `cases.py` evaluates a GLSL expression on the GPU for a set of complex
inputs and compares the result with an [mpmath](https://mpmath.org) reference (30 digits).
The shader sources are the files the application uses (`globals`, `complex`, `special`,
`extra`), so the tests exercise exactly what ships.

Requirements: `python3` and a browser with WebGL2 and software or hardware rendering
(Firefox, or Chromium / Chrome). mpmath is installed automatically in `tests/.venv` the first time.

```sh
python3 tests/run.py                  # all tests
python3 tests/run.py gamma bessel     # names containing one of the words
python3 tests/run.py --tag new        # only the new functions (or: existing)
python3 tests/run.py --list           # list the cases
python3 tests/run.py -v theta         # every point: input, reference, result, error
python3 tests/run.py --failures-only  # quiet output
python3 tests/run.py --json out.json  # machine readable report
python3 tests/run.py --browser /usr/bin/chromium --chunk 3
```

The exit status is `0` when everything passes, `1` when a test fails (or a shader does not
compile) and `2` when the browser could not run.

How it works: the cases are batched by 6 into small shader programs (a `switch(fn)` over
the expressions) rendered into `RGBA32F` textures, one pixel per input point, and read back
with `readPixels`. Inputs are rounded to float32 before the reference is evaluated.
Batching is needed because a very large `switch` is miscompiled by some software rasterizers
(llvmpipe) and returns garbage for unrelated cases. If you see inexplicable failures, try `--chunk 1`.

### Tolerances

The error is `|got - ref| / max(|ref|, 1e-3)`, so very small references are compared with an
absolute tolerance. Tolerances are per case (float32 gives about `1e-6` for simple functions,
`1e-3` for series that cancel). A few cases have a looser tolerance with a comment explaining
why (integer orders nudged away from poles, exponentially small values...); keep such
limits documented next to the case rather than loosening the global default.

### Adding a case

In `cases.py`:

```python
T('cmyfunc', 'cmyfunc(a, b)', f2(lambda z, w: mp.myfunc(z, w)),
  [(p[0], p[1], .5, .2) for p in G], 1e-3, 2)
```

The GLSL expression can use `a`, `b`, `c`, `d` (the four complex inputs, `vec2`). Inputs are
tuples `(a.re, a.im, b.re, b.im, ...)`. `G`, `SMALL`, `UHP` (upper half plane) and `BIG` are
ready made grids; `f1`...`f4` adapt a reference taking 1 to 4 arguments. Mind the argument
order of mpmath (`besselj(order, z)`, `legenp(n, m, z)`, `jtheta(n, z, q)`...).

## Formula tests (`formula.test.mjs`)

Static checks, run with `node --test`:

- every function registered in `functionShader` exists in the GLSL sources;
- every preset formula only calls functions that exist (catches typos and missing GLSL);
- the derivatives generated for the functions that have a rule only call existing functions;
- a few regressions on the derivative rules and the generated GLSL.

The test also reports as a diagnostic the presets that have no derivative rule: derivative
shading is not available for them and would fail to compile.
