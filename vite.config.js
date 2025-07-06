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
      name: 'app-accordion', /// это в package.json так название компонента будет
      fileName: (format) => `app-accordion.${format}.js`
    },
    rollupOptions: {
      external: ['vue'] /// внешняя библиотека, чтоб не тащилась при сборке
    },
    output: {
      globals: {
        vue: 'Vue' /// указываем, что зависит от Vue. В данном случае
      }
    }
  },
  plugins: [
    vue(),
    pugPlugin(options, locals)
  ],
})
