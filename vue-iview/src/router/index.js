import Vue from 'vue';
import Router from 'vue-router';
//主题页面
import home from '@/components/home';
//各类子页面
import option1 from '@/components/option1';
import option2 from '@/components/option2';

//错误页面
import error from '@/components/error404';
//登录页面
import login from '@/components/login';

//注册页面
import register from '@/components/register';

//找回密码页面
import retrieve from '@/components/retrieve';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/' ,
      name: 'home' ,
      component: home ,
      children: [
        {
          path: '/' ,
          component: option1
        } ,
        {
          path: '/option1' ,
          component: option1
        } ,
        {
          path: '/option2' ,
          component: option2
        }
      ]
    } , {
      path: '/login' ,
      component: login
    } ,
    {
      path: '/retrieve' ,
      component: retrieve
    } ,
    {
      path: '/register' ,
      component: register
    } ,
    {
      path: '*' ,
      component: error
    }
  ]
});
