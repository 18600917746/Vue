<template>
  <div class="hello">
    <vue-editor v-loading="loading"
                v-model="content"
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
      loading:true,
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
