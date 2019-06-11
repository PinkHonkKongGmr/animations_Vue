import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.directive('scroll', {
  inserted: function (el,binding) {
    let f = function (evt) {
      binding.value(evt, el);
    }
    window.addEventListener('scroll', f)
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
