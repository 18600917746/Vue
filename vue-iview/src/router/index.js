import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import option1 from '@/components/option1';
import option2 from '@/components/option2';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/' ,
      name: 'HelloWorld' ,
      component: HelloWorld ,
      children: [
        {
          path: 'option1' ,
          component: option1
        } ,
        {
          path: 'option2' ,
          component: option2
        }
      ]
    }
  ]
});
