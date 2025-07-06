import { createApp } from 'vue'
import './style.css'
import './assets/sass/common.sass'
import App from './App.vue'
// import AppAccordion from 'carousel-pictures'
// import '../node_modules/carousel-pictures/dist/carousel-pictures.css'
// TODO: косяк с css. 
/*
1. разделить надо для сборки и для проверки проекты
2. Прицепить CSS чтоб автоматом подтягивался, а не как тут.
3. сделать карусельку как я начал на шопе организовывать
*/

const app = createApp(App)
app.mount('#app')

