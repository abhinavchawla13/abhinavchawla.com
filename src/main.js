import Vue from 'vue'
// eslint-disable-next-line
import './styles/main.scss';
import App from './App.vue'
import VueGtag from "vue-gtag";


Vue.config.productionTip = false

const isProd = process.env.NODE_ENV === 'production';

Vue.use(VueGtag, {
  config: { 
    id: "G-MZYEKJ6WJC",
    params: {
      send_page_view: isProd
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
