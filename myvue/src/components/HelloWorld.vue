<template>
  <div class="hello">
    <!--vuex -内 方法 使用-->
    <button @click="jia">+</button>
    <button @click="$store.commit('jian')">-</button>
    <button @click="jiaPlus">+Plus</button>
    <button @click="jianPlus">-Plus</button>
    <!--vuex -内 参数 使用-->
    {{ $store.state.count }} - {{ count }}
    <vue-editor v-model="content"
                :config="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"></vue-editor>

  </div>
</template>

<script>
  import {VueEditor} from 'vue2-quill-editor';
  //引入状态对象的管理工具
  import {mapState} from 'vuex';
  //引入触发状态的管理工具
  import {mapMutations} from 'vuex';
  //引入Getters
  import {mapGetters} from 'vuex';
  //引入异步的触发状态管理工具
  import {mapActions} from 'vuex';

  export default {
    name: 'HelloWorld' ,
    components: {VueEditor} ,
    data() {
      return {
        content: '<h1>Some initial content</h1>' ,
        editorOption: {}
      };
    } ,
    //检测 vuex 中状态对象的数据
    // computed: mapState({
    //   count: state => state.count
    // })
    //更加优化版 - 注册的时候 一定要加上 ...
    computed: {
      ...mapState(['count'])
    },
    methods:{
      ...mapMutations(['jia']),
      // count(){
      //   return this.$store.getters
      // }
      ...mapGetters(['count']),
      ...mapActions(['jiaPlus','jianPlus'])
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
