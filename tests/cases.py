"""Test cases for the GLSL complex functions.

Each case evaluates a GLSL expression on the GPU for a list of inputs and compares
the result with an mpmath reference.

    T(name, glsl, ref, inputs, tol=2e-4, nin=1)

name    unique identifier (used for filtering)
glsl    GLSL expression of vec2 a, b, c, d (inputs, 4 complex slots) returning a vec2
ref     python function (a, b, c, d) -> complex, evaluated with mpmath (mpc arguments)
inputs  list of tuples (a.re, a.im, b.re, b.im, c.re, c.im, d.re, d.im), shorter tuples are zero padded
tol     maximum relative error |got - ref| / max(|ref|, 1e-3)
nin     number of complex inputs, only used to print failing inputs
"""
import mpmath as mp

mp.mp.dps = 30

TESTS = []
TAG = 'existing'


def T(name, glsl, ref, inputs, tol=2e-4, nin=1):
    assert all(t['name'] != name for t in TESTS), 'duplicate test ' + name
    if inputs:
        TESTS.append(dict(name=name, glsl=glsl, ref=ref, inputs=inputs, tol=tol, nin=nin, tag=TAG))


def pts(re, im):
    return [(a, b) for a in re for b in im]


def f1(ref):
    return lambda a, b, c, d: ref(a)


def f2(ref):
    return lambda a, b, c, d: ref(a, b)


def f3(ref):
    return lambda a, b, c, d: ref(a, b, c)


def f4(ref):
    return lambda a, b, c, d: ref(a, b, c, d)


G = pts([-2.3, -.7, .4, 1.3, 2.6], [-1.7, -.3, .6, 1.9])  # generic grid of z
SMALL = pts([-.8, -.3, .2, .6], [-.6, -.1, .3, .7])
UHP = pts([-.7, -.2, .1, .45], [.4, .8, 1.3, 2.])  # upper half plane
BIG = pts([-14, -6, 4, 9, 15], [-9, -3, 5, 12])


TAG = 'existing'
T('csqrt', 'csqrt(a)', f1(mp.sqrt), G + [(-4., 0.), (-1., 0.), (-9., 0.), (4., 0.)])
T('cgamma', 'cgamma(a)', f1(mp.gamma), G)
T('cpsi', 'cpsi(a)', f1(mp.digamma), G)
T('czeta', 'czeta(a)', f1(mp.zeta), pts([-3.5, -1.2, .3, .5, 1.7, 3.2], [-8., -2., 1., 9.]), 1e-3)
T('czeta_a', 'czeta(a, b)', f2(mp.zeta), [(p[0], p[1], .4, .2) for p in pts([-1.5, .5, 2.4], [-3., 2.])], 1e-3, 2)
T('cdzeta', 'cdzeta(a)', lambda a, b, c, d: mp.zeta(a, 1, 1), pts([-1.5, 0., .5, 1.7, 3.2], [-4., 1., 6.]), 2e-3)
T('ceta', 'ceta(a)', lambda a, b, c, d: mp.altzeta(a), pts([-1.5, .3, 1.7, 3.2], [-4., 1., 6.]), 1e-3)
T('cxi', 'cxi(a)', lambda a, b, c, d: mp.mpf(1) / 2 * a * (a - 1) * mp.pi ** (-a / 2) * mp.gamma(a / 2) * mp.zeta(a), pts([-1.5, .3, 1.7, 3.2], [-4., 1., 6.]), 1e-3)
T('cerf', 'cerf(a)', f1(mp.erf), G, 5e-4)
T('cerfc', 'cerfc(a)', f1(mp.erfc), G, 5e-3)
T('cerfi', 'cerfi(a)', f1(mp.erfi), G, 5e-4)
T('cfaddeeva', 'cfaddeeva(a)', f1(lambda z: mp.exp(-z * z) * mp.erfc(-1j * z)), G, 5e-3)
T('cdawson', 'cdawson(a)', f1(lambda z: mp.sqrt(mp.pi) / 2 * mp.exp(-z * z) * mp.erfi(z)), SMALL + pts([1., 2.], [.3, -1.]), 5e-3)
fS = lambda z: mp.sqrt(mp.pi / 2) * mp.fresnels(z * mp.sqrt(2 / mp.pi))
fC = lambda z: mp.sqrt(mp.pi / 2) * mp.fresnelc(z * mp.sqrt(2 / mp.pi))
T('cfresnels', 'cfresnels(a)', f1(fS), SMALL + pts([1., 1.6], [.3, -.4]), 5e-3)
T('cfresnelc', 'cfresnelc(a)', f1(fC), SMALL + pts([1., 1.6], [.3, -.4]), 5e-3)
h = mp.sqrt(mp.pi / 8)
T('cfresnelf', 'cfresnelf(a)', f1(lambda z: (h - fS(z)) * mp.cos(z * z) - (h - fC(z)) * mp.sin(z * z)), pts([.5, 1., 1.6], [.3, -.4]), 5e-3)
T('cfresnelg', 'cfresnelg(a)', f1(lambda z: (h - fS(z)) * mp.sin(z * z) - (h - fC(z)) * mp.cos(z * z)), pts([.5, 1., 1.6], [.3, -.4]), 5e-3)
T('cexpint', 'cexpint(a)', f1(mp.ei), pts([-3., -.5, .7, 2., 5.], [-2., .5, 1.5, 4.]), 1e-3)
T('clambertw', 'clambertw(a)', f1(mp.lambertw), G, 1e-3)
T('cbeta', 'cbeta(a, b)', f2(mp.beta), [(p[0], p[1], .7, .3) for p in G[::2]], 1e-3, 2)
T('cpolygamma', 'cpolygamma(a, b)', lambda a, b, c, d: mp.polygamma(int(b.real), a), [(p[0], p[1], 2., 0.) for p in G if p[0] > 0.3], 1e-3, 2)
T('ccphi', 'cphi(a, b, c)', f3(lambda z, s, q: mp.lerchphi(z, s, q)), [(p[0] * .3, p[1] * .2, 2.5, .3, .6, 0) for p in G[:8]], 1e-3, 3)
T('cellk', 'cellk(a)', f1(mp.ellipk), G, 1e-3)
T('cnome', 'cnome(a)', f1(lambda m: mp.exp(-mp.pi * mp.ellipk(1 - m) / mp.ellipk(m))), SMALL, 1e-3)
T('csn', 'csn(a, b)', lambda a, b, c, d: mp.ellipfun('sn', a, m=b), [(.3, .2, .5, 0), (1.1, -.4, .5, 0), (-.7, .9, .5, 0), (.5, .5, .5, 0)], 5e-3, 2)
T('ccn', 'ccn(a, b)', lambda a, b, c, d: mp.ellipfun('cn', a, m=b), [(.3, .2, .5, 0), (1.1, -.4, .5, 0), (-.7, .9, .5, 0)], 5e-3, 2)
T('cdn', 'cdn(a, b)', lambda a, b, c, d: mp.ellipfun('dn', a, m=b), [(.3, .2, .5, 0), (1.1, -.4, .5, 0), (-.7, .9, .5, 0)], 5e-3, 2)
# cfibonacci is the principal-branch Binet formula, cfibonaccir uses cos(pi z) and is real on the real axis
T('cfibonacci', 'cfibonacci(a)', f1(lambda z: (mp.phi ** z - mp.exp(-z * (mp.log(mp.phi) + 1j * mp.pi))) / mp.sqrt(5)), G, 1e-3)
T('cfibonaccir', 'cfibonaccir(a)', f1(mp.fib), G, 1e-3)
T('cli', 'cli(a, b)', lambda a, b, c, d: mp.polylog(b.real, a), [(.3, .2, 2., 0), (-.5, .4, 2., 0), (2., 1., 2., 0), (-3., .5, 3., 0)], 3e-2, 2)  # integer orders are nudged by 2e-3 to avoid the gamma pole
T('cli2', 'cli(a, b)', lambda a, b, c, d: mp.polylog(b.real, a), [(-3., .5, 2.5, 0), (1.5, 1., 2.5, 0), (.8, .5, .7, 0), (-.9, .2, 3.5, 0), (2., -1., 1.5, 0)], 5e-3, 2)
T('czeta_a2', 'czeta(a, b)', f2(mp.zeta), [(p[0], p[1], .5, .1) for p in pts([-3.5, -2.5, -1.5, -.5, .5], [-.5, .3, 2.])] + [(p[0], p[1], .3, -.2) for p in pts([-3.5, -2.5], [-.5, .3])], 1e-2, 2)  # values are ~1e-3 and cancel in float32 for Re s < -2
T('cellpk', 'vec2(cellpk(a.x), 0.)', f1(lambda x: mp.ellipk(1 - x.real)), [(.05, 0), (.3, 0), (.7, 0), (.95, 0)], 1e-4)
T('cellipticFi', 'cellipticFi(a, b)', lambda a, b, c, d: mp.ellipf(a, b.real), [(.3, .2, .5, 0), (.8, .5, .5, 0), (1.1, -.4, .3, 0)], 5e-3, 2)
T('cdgamma', 'cdgamma(a)', f1(lambda z: mp.gamma(z) * mp.digamma(z)), G, 1e-3)
T('cdbeta', 'cdbeta(a, b)', f2(lambda z, w: mp.beta(z, w) * (mp.digamma(z) - mp.digamma(z + w))), [(p[0], p[1], .7, .3) for p in G[::3]], 1e-3, 2)
T('cdfaddeeva', 'cdfaddeeva(a)', f1(lambda z: mp.diff(lambda x: mp.exp(-x * x) * mp.erfc(-1j * x), z)), SMALL + [(1., .5)], 2e-3)
T('cderf', 'cderf(a)', f1(lambda z: mp.diff(mp.erf, z)), SMALL, 1e-4)
T('ccos', 'ccos(a)', f1(mp.cos), G, 1e-4)
T('ctan', 'ctan(a)', f1(mp.tan), G, 1e-4)
T('casin', 'casin(a)', f1(mp.asin), G, 1e-4)
T('cacos', 'cacos(a)', f1(mp.acos), G, 1e-4)
T('catan', 'catan(a)', f1(mp.atan), G, 1e-4)
T('cacosh', 'cacosh(a)', f1(mp.acosh), G, 1e-4)
T('casinh', 'casinh(a)', f1(mp.asinh), G, 1e-4)
T('catanh', 'catanh(a)', f1(mp.atanh), G, 1e-4)
T('cpow', 'cpow(a, b)', f2(lambda z, w: z ** w), [(p[0], p[1], .7, .3) for p in G], 1e-4, 2)

TAG = 'new'
T('csec', 'csec(a)', f1(mp.sec), G, 1e-4)
T('ccsc', 'ccsc(a)', f1(mp.csc), G, 1e-4)
T('ccot', 'ccot(a)', f1(mp.cot), G, 1e-4)
T('csech', 'csech(a)', f1(mp.sech), G, 1e-4)
T('ccsch', 'ccsch(a)', f1(mp.csch), G, 1e-4)
T('ccoth', 'ccoth(a)', f1(mp.coth), G, 1e-4)
T('cacot', 'cacot(a)', f1(mp.acot), G, 1e-4)
T('casec', 'casec(a)', f1(mp.asec), G, 1e-4)
T('cacsc', 'cacsc(a)', f1(mp.acsc), G, 1e-4)
T('ccbrt', 'ccbrt(a)', f1(mp.cbrt), G, 1e-4)
T('croot', 'croot(a, b)', f2(lambda z, n: z ** (1 / n)), [(p[0], p[1], 4., 0.) for p in G], 1e-4, 2)
T('clog2', 'clog2(a)', f1(lambda z: mp.log(z, 2)), G, 1e-4)
T('clog10', 'clog10(a)', f1(lambda z: mp.log10(z)), G, 1e-4)
T('clgamma', 'clgamma(a)', f1(mp.loggamma), G + BIG, 5e-4)
T('crgamma', 'crgamma(a)', f1(mp.rgamma), G + [(-2., 0.), (0., 0.)], 5e-4)
T('ctrigamma', 'ctrigamma(a)', f1(lambda z: mp.polygamma(1, z)), [p for p in G if p[0] > 0.3], 2e-3)
T('cgammal', 'cgammal(a, b)', f2(lambda s, z: mp.gammainc(s, 0, z)), [(1.5, .2, p[0], p[1]) for p in pts([.4, 1.3, 3.5, 7], [-1., .5, 2.])], 1e-3, 2)
T('cgammau', 'cgammau(a, b)', f2(lambda s, z: mp.gammainc(s, z, mp.inf)), [(1.5, .2, p[0], p[1]) for p in pts([.4, 1.3, 3.5, 7], [-1., .5, 2.])], 1e-3, 2)
T('crstheta', 'crstheta(a)', f1(mp.siegeltheta), [(5., 0.), (14.1, 0.), (30., 0.), (21., .5)], 2e-3)
T('criemannz', 'criemannz(a)', f1(mp.siegelz), [(5., 0.), (14.1, 0.), (21., 0.), (30., 0.)], 5e-3)
T('cdirichletbeta', 'cdirichletbeta(a)', f1(lambda s: mp.dirichlet(s, [0, 1, 0, -1])), pts([.3, 1.7, 3.], [-2., 1., 5.]), 1e-3)
T('cdirichletl3', 'cdirichletl3(a)', f1(lambda s: mp.dirichlet(s, [0, 1, -1])), pts([.3, 1.7, 3.], [-2., 1., 5.]), 1e-3)
T('ctheta1', 'ctheta1(a, b)', f2(lambda z, q: mp.jtheta(1, z, q)), [(p[0], p[1], .3, .2) for p in G[::2]] + [(.7, .2, .8, 0.)], 1e-3, 2)
T('ctheta2', 'ctheta2(a, b)', f2(lambda z, q: mp.jtheta(2, z, q)), [(p[0], p[1], .3, .2) for p in G[::2]] + [(.7, .2, .8, 0.)], 1e-3, 2)
T('ctheta3', 'ctheta3(a, b)', f2(lambda z, q: mp.jtheta(3, z, q)), [(p[0], p[1], .3, .2) for p in G[::2]] + [(.7, .2, .8, 0.)], 1e-3, 2)
T('ctheta4', 'ctheta4(a, b)', f2(lambda z, q: mp.jtheta(4, z, q)), [(p[0], p[1], .3, .2) for p in G[::2]] + [(.7, .2, .8, 0.)], 1e-3, 2)
for k in (1, 2, 3, 4):
    T('cdtheta%d' % k, 'cdtheta%d(a, b)' % k, f2(lambda z, q, k=k: mp.jtheta(k, z, q, 1)), [(p[0], p[1], .3, .2) for p in G[::3]], 1e-3, 2)
T('cqpoch', 'cqpoch(a, b)', f2(lambda a, q: mp.qp(a, q)), [(.5, .2, .3, .1), (-.4, .6, .5, -.2), (1.2, 0., .6, .2)], 1e-3, 2)


def mp_eta(t):
    q = mp.exp(2j * mp.pi * t)
    return mp.exp(1j * mp.pi * t / 12) * mp.qp(q, q)


def mp_E(t, k):
    q = mp.exp(2j * mp.pi * t)
    c = 240 if k == 4 else -504
    return 1 + c * mp.nsum(lambda n: n ** (k - 1) * q ** n / (1 - q ** n), [1, mp.inf])


T('cdedekind', 'cdedekind(a)', f1(mp_eta), UHP + [(.3, .2), (5.2, .15), (-3.4, .5)], 1e-3)
T('ceisenstein4', 'ceisenstein4(a)', f1(lambda t: mp_E(t, 4)), UHP + [(.3, .3)], 2e-3)
T('ceisenstein6', 'ceisenstein6(a)', f1(lambda t: mp_E(t, 6)), UHP + [(.3, .3)], 2e-3)
T('ckleinj', 'ckleinj(a)', f1(lambda t: 1728 * mp.kleinj(t)), [p for p in UHP if p[1] > .5], 3e-3)
T('cmodlambda', 'cmodlambda(a)', f1(lambda t: mp.jtheta(2, 0, mp.exp(1j * mp.pi * t)) ** 4 / mp.jtheta(3, 0, mp.exp(1j * mp.pi * t)) ** 4), [p for p in UHP if p[1] > .6], 2e-3)
T('cellke', 'cellke(a)', f1(mp.ellipe), G, 1e-3)


def mp_wp(z, tau):
    w = mp.exp(2j * mp.pi * z)
    q = mp.exp(2j * mp.pi * tau)
    s = mp.mpf(1) / 12 + w / (1 - w) ** 2
    s += mp.nsum(lambda n: q ** n * w / (1 - q ** n * w) ** 2 + q ** n / w / (1 - q ** n / w) ** 2 - 2 * q ** n / (1 - q ** n) ** 2, [1, mp.inf])
    return (2j * mp.pi) ** 2 * s


L = 2 * mp.mpf('1.529954037057')
tau6 = mp.exp(1j * mp.pi / 3)
T('cweierstrass', 'cweierstrass(a)', f1(lambda z: mp_wp(z / L, tau6) / L ** 2), [(.3, .2), (.9, .4), (-.5, .7), (1.3, -.2), (.2, 1.1)], 3e-3)
T('cdweierstrass', 'cdweierstrass(a)', f1(lambda z: mp.diff(lambda x: mp_wp(x / L, tau6) / L ** 2, z)), [(.3, .2), (.9, .4), (-.5, .7), (1.3, -.2), (.2, 1.1)], 3e-3)
T('cwp', 'cwp(a, b)', f2(mp_wp), [(.3, .2, .1, 1.), (.15, .3, .3, .9), (.4, .1, 0., 1.2)], 3e-3, 2)
T('chyp0f1', 'chyp0f1(a, b)', f2(lambda b, z: mp.hyp0f1(b, z)), [(1.5, .3, p[0], p[1]) for p in G], 1e-3, 2)
T('chyp1f1', 'chyp1f1(a, b, c)', f3(lambda a, b, z: mp.hyp1f1(a, b, z)), [(.7, .2, 2.3, -.1, p[0], p[1]) for p in G], 1e-3, 3)
T('chyp2f1', 'chyp2f1(a, b, c, d)', f4(lambda a, b, c, z: mp.hyp2f1(a, b, c, z)),
  [(.7, .2, 1.3, -.4, 2.1, .3, p[0], p[1]) for p in pts([-3., -.8, .3, .6, .95, 1.4, 3.], [-1.2, .2, .7, 2.])], 3e-3, 4)
T('chyp2f1b', 'chyp2f1(a, b, c, d)', f4(lambda a, b, c, z: mp.hyp2f1(a, b, c, z)),
  [(.5, 0., .5, 0., 1., 0., p[0], p[1]) for p in pts([-3., -.8, .3, .6, .95], [-.7, .2, 1.])], 3e-3, 4)
T('clegendrep', 'clegendrep(a, b)', f2(lambda z, n: mp.legenp(n, 0, z, type=3)), [(p[0], p[1], 2.5, .0) for p in G[::3]], 3e-3, 2)
T('cchebyshevt', 'cchebyshevt(a, b)', f2(lambda z, n: mp.chebyt(n, z)), [(p[0], p[1], 3.5, .0) for p in G[::3]], 3e-3, 2)
T('cchebyshevu', 'cchebyshevu(a, b)', f2(lambda z, n: mp.chebyu(n, z)), [(p[0], p[1], 3.5, .0) for p in G[::3]], 3e-3, 2)
T('claguerre', 'claguerre(a, b)', f2(lambda z, n: mp.laguerre(n, 0, z)), [(p[0], p[1], 2.5, .0) for p in G[::3]], 3e-3, 2)
T('chermite', 'chermite(a, b)', f2(lambda z, n: mp.hermite(n, z)), [(p[0] * .6, p[1] * .6, 2.5, .0) for p in G[::3]] + [(.4, .2, 3., 0.)], 3e-3, 2)
Z2 = pts([-2.3, -.4, .4, 1.3, 3.1, 6., 9., 14.], [-1.7, .6, 1.9, 5., -7.])
Z2 = [p for p in Z2 if abs(complex(*p)) > .2]
for nu in (0., .5, 1., 2.7, 3.):
    T('besselj%g' % nu, 'cbesselj(a, b)', f2(lambda z, n: mp.besselj(n, z)), [(p[0], p[1], nu, 0.) for p in Z2 if p[0] > 0], 5e-3, 2)
    T('bessely%g' % nu, 'cbessely(a, b)', f2(lambda z, n: mp.bessely(n, z)), [(p[0], p[1], nu, 0.) for p in Z2 if p[0] > 0], 5e-3, 2)
    T('besseli%g' % nu, 'cbesseli(a, b)', f2(lambda z, n: mp.besseli(n, z)), [(p[0], p[1], nu, 0.) for p in Z2], 5e-3, 2)
    T('besselk%g' % nu, 'cbesselk(a, b)', f2(lambda z, n: mp.besselk(n, z)), [(p[0], p[1], nu, 0.) for p in Z2], 5e-3, 2)
T('besselh1', 'cbesselh1(a, b)', f2(lambda z, n: mp.hankel1(n, z)), [(p[0], p[1], .5, 0.) for p in Z2 if p[0] > 0], 5e-3, 2)
T('besselh2', 'cbesselh2(a, b)', f2(lambda z, n: mp.hankel2(n, z)), [(p[0], p[1], .5, 0.) for p in Z2 if p[0] > 0], 1e-2, 2)  # H2 is exponentially small for Im z < 0; |J - iY| loses digits
T('besselj_neg', 'cbesselj(a, b)', f2(lambda z, n: mp.besselj(n, z)), [(1.2, .3, -2., 0.), (2.5, -.4, -3., 0.)], 5e-3, 2)
ZA = pts([-9., -5., -3.5, -2., -.7, .2, 1.1, 2.4, 3.2, 5., 8.], [-4., -.8, 0., .6, 2., 6.])
ZA = [p for p in ZA if abs(complex(*p)) > 0]
T('cairyai', 'cairyai(a)', f1(mp.airyai), ZA, 5e-3)
T('cairybi', 'cairybi(a)', f1(mp.airybi), ZA, 5e-3)
SI = pts([-12., -7., -4., -1., .5, 2., 5., 7., 12.], [-6., -1., 0., 2., 8.])
SI = [p for p in SI if abs(complex(*p)) > .1]
T('csinint', 'csinint(a)', f1(mp.si), SI, 5e-3)
T('ccosint', 'ccosint(a)', f1(mp.ci), SI, 5e-3)
T('csinhint', 'csinhint(a)', f1(mp.shi), SI, 5e-3)
T('ccoshint', 'ccoshint(a)', f1(mp.chi), SI, 5e-3)
