import Vue from 'vue'
// eslint-disable-next-line
import './styles/main.scss';
import App from './App.vue'

Vue.config.productionTip = false
// export const bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
