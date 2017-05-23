import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueTouch from 'vue-touch';

Vue.use(VueTouch);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
