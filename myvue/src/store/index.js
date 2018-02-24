import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 4
};

const mutations={
  jian(state){
    state.count--;
  },
  jia(state){
    state.count++;
  }
}
export default new Vuex.Store({
  state,
  mutations
});
