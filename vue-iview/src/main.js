// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
//TODO:引入路由
import router from './router';
//TODO:引入 ui 框架
import iView from 'iview';
//引入粒子背景
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
//TODO:引入 axios
import Ajax from './axios';
//TODO:引入全局公用变量、方法
import './public'
Vue.use(Ajax);
Vue.use(iView);


import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app' ,
  router ,
  components: {App} ,
  template: '<App/>'
});
