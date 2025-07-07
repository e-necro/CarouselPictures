import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pugPlugin from 'vite-plugin-pug'
import { resolve } from 'path'

const options = { pretty: true }
const locals = { name: 'Flavien' }

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'app-carousel-pictures', /// it's component name in package.json 
      fileName: (format) => `app-carousel-pictures.${format}.js`
    },
    rollupOptions: {
      external: ['vue'] /// outer library what not need in build
    },
    output: {
      globals: {
        vue: 'Vue' /// it's said that is Vue depenses
      }
    }
  },
  plugins: [
    vue(),
    pugPlugin(options, locals)
  ],
})
