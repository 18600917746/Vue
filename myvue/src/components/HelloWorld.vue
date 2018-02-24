<template>
  <div class="hello">
    <!--vuex -内 方法 使用-->
    <button @click="$store.commit('jia')">+</button>
    <button @click="$store.commit('jian')">-</button>
    <!--vuex -内 参数 使用-->
    {{ $store.state.count }}
    <vue-editor v-model="content"
                :config="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"></vue-editor>

  </div>
</template>

<script>
  import { VueEditor } from 'vue2-quill-editor'
export default {
  name: 'HelloWorld',
  components:{VueEditor},
  data () {
    return {
      content: '<h1>Some initial content</h1>',
      editorOption:{

      }
    }
  }
}
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
