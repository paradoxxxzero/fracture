// Static checks of the formula compiler against the GLSL sources.
// Run with: node --import ./tests/register.mjs --test tests/formula.test.mjs
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'

globalThis.window = {} // formula.js registers debugging helpers on window

const shaderDir = new URL('../fracture/shaders/', import.meta.url)
const glsl = ['globals', 'complex', 'special', 'extra']
  .map(name => readFileSync(new URL(`${name}.glsl`, shaderDir), 'utf8'))
  .join('\n')

const defined = new Set(
  [
    ...glsl.matchAll(
      /^\s*(?:vec2|vec3|vec4|float|int|bool|void)\s+(\w+)\s*\(/gm
    ),
  ].map(m => m[1])
)
const builtins = new Set(
  `vec2 vec3 vec4 float int bool abs sign floor ceil round fract mod min max clamp length dot pow exp log sqrt
   sin cos tan sinh cosh tanh atan asin acos`.split(/\s+/)
)

// Names of the functions called in a generated shader expression that exist neither in the sources nor in GLSL
const unknownCalls = code =>
  [
    ...new Set([...code.matchAll(/([A-Za-z_]\w*'*)\s*\(/g)].map(m => m[1])),
  ].filter(name => !defined.has(name) && !builtins.has(name))

const { ast, derive, functionShader } = await import('../fracture/formula.js')
const { presets } = await import('../fracture/presets.js')

test('the GLSL sources define functions', () => {
  assert.ok(defined.has('cgamma') && defined.has('cbesselj'))
})

test('every registered function maps to a GLSL function', () => {
  const missing = Object.entries(functionShader).filter(
    ([, shader]) => !defined.has(shader)
  )
  assert.deepEqual(missing, [])
})

const allPresets = presets.flatMap(p => [p, ...p.subforms])

test('every preset formula only calls existing GLSL functions', () => {
  const bad = allPresets
    .map(p => ({
      name: p.name,
      f: p.params.f,
      unknown: unknownCalls(ast(p.params.f).toShader()),
    }))
    .filter(p => p.unknown.length)
  assert.deepEqual(bad, [])
})

test('preset derivatives (informational)', t => {
  const bad = allPresets.filter(
    p => unknownCalls(ast(p.params.f_prime_z).toShader()).length
  )
  // Derivative shading of these presets would not compile: a derivative rule is missing in formula.js
  t.diagnostic(
    `${bad.length}/${allPresets.length} presets lack a derivative rule: ${bad.map(p => p.params.f).join(', ')}`
  )
})

test('derivatives of the functions with a rule only call existing GLSL functions', () => {
  const expressions = [
    'sec(z)',
    'csc(z)',
    'cot(z)',
    'sech(z)',
    'csch(z)',
    'coth(z)',
    'cbrt(z)',
    'log2(z)',
    'log10(z)',
    'lgamma(z)',
    'psi(z)',
    'expint(z)',
    'lint(z)',
    'sinint(z)',
    'cosint(z)',
    'sinhint(z)',
    'coshint(z)',
    'erfc(z)',
    'erfi(z)',
    'dawson(z)',
    'lambertw(z)',
    'lambertw(z, 1)',
    'omega(z)',
    'besselj(z, 2)',
    'bessely(z, 2)',
    'besseli(z, 2)',
    'besselk(z, 2)',
    'hyp2f1(a, b, c, z)',
    'hyp1f1(a, b, z)',
    'hyp0f1(b, z)',
    'gammal(s, z)',
    'gammau(s, z)',
    'sn(z, .5)',
    'cn(z, .5)',
    'dn(z, .5)',
    'theta1(z, q)',
    'theta2(z, q)',
    'theta3(z, q)',
    'theta4(z, q)',
    'zeta(z)',
    'gamma(z)',
    'erf(z)',
    'z^2 / (1 + exp(z))',
  ]
  const bad = expressions
    .map(e => ({ e, unknown: unknownCalls(derive(e).toShader()) }))
    .filter(r => r.unknown.length)
  assert.deepEqual(bad, [])
})

test('derivative regressions', () => {
  assert.equal(derive('log2(z)').toString(), "z' / (z * log(2))")
  assert.equal(derive('log10(z)').toString(), "z' / (z * log(10))")
  assert.equal(derive('dn(z)').toString().startsWith('-0.5 * sn(z)'), true)
  assert.equal(derive('sin(z)').toString(), "cos(z) * z'")
})

test('operators compile to the complex GLSL helpers', () => {
  assert.equal(
    ast('z * c + 1').toShader(),
    'cadd(cmul(z, c), vec2(1.000000, 0.))'
  )
  assert.equal(ast('z^2').toShader(), 'cpow2(z)')
})
