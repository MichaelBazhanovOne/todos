import Vue from 'vue'
import App from './App.vue'
import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation);

new Vue({
  el: '#app',
  render: h => h(App)
})
