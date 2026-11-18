// Resolve the extensionless relative imports used by the sources (Vite resolves them in the app)
export async function resolve(specifier, context, next) {
  if (specifier.startsWith('.') && !/\.[a-z]+$/.test(specifier)) {
    try {
      return await next(specifier + '.js', context)
    } catch {
      // fall through
    }
  }
  return next(specifier, context)
}
