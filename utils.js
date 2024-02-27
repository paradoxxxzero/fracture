export const debounce = (fn, delay) => {
  let timeout
  return function () {
    const args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
