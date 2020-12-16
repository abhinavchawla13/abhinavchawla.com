import Vue from 'vue'
// eslint-disable-next-line
import './styles/main.scss';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
