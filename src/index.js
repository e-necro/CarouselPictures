import Accordion from "./components/Accordion.vue";

export default {
 install: (app, options) => {
   app.component('AppAccordion', Accordion) 
 }   
}