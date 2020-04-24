import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuesax from 'vuesax';

// import bootstrap CSS
import '@/assets/css/bootstrap.min.css'

// import Vuesax styles
import 'vuesax/dist/vuesax.css'

// Vuesax colors customizing
Vue.use(Vuesax, {
  theme:{
    colors:{
      primary:'#5b3cc4',
      success:'rgb(23, 201, 100)',
      danger:'rgb(242, 19, 93)',
      warning:'rgb(255, 130, 0)',
      dark:'rgb(36, 33, 69)'
    }
  }
});

// import material icons
import 'material-icons/iconfont/material-icons.css';
import "./assets/css/styles.sass";


Vue.filter('currency',(val)=>{
  return `$${val.toLocaleString()}`
});


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
