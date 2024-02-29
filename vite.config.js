import react from '@vitejs/plugin-react'

export default {
  base: '',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
  server: {
    port: 15151,
  },
}
