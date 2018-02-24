import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//状态对象
const state = {
  count: 4
};
//触发对象（同步）
const mutations = {
  jian(state) {
    state.count--;
  } ,
  jia(state) {
    state.count++;
  }
};
//计算属性，触发及计算
const getters = {
  count: function (state) {
    return state.count += 100;
  }
};
//触发对象（异步）
const actions={
  jiaPlus(context){
    context.commit('jia',{a:1})
  },
  jianPlus({commit}){
    commit('jian')
  }
}
export default new Vuex.Store({
  state ,
  mutations ,
  getters,
  actions
});
