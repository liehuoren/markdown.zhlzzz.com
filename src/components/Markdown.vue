<template>
  <div class="indexContainer">
    <div id="editor">
      <mavon-editor
        :subfield = "subfield"
        :code_style="code_style"
        :ishljs="true"
        :external_link="external_link"
        ></mavon-editor>
    </div>
    <div class="footer">2017 &copy; <a href="https://blog.zhlzzz.com">z.h.l</a> </div>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'editor',
  data () {
    return {
      subfield: true,
      code_style: 'solarized-dark',
      external_link: {
        markdown_css: function () {
          // 这是你的markdown css文件路径
          return '/markdown/github-markdown.min.css'
        },
        hljs_js: function () {
          // 这是你的hljs文件路径
          return '/highlightjs/highlight.min.js'
        },
        hljs_css: function (css) {
          // 这是你的代码高亮配色文件路径
          return '/highlightjs/styles/' + css + '.min.css'
        },
        hljs_lang: function (lang) {
          // 这是你的代码高亮语言解析路径
          return '/highlightjs/languages/' + lang + '.min.js'
        },
        katex_css: function () {
          // 这是你的katex配色方案路径路径
          return '/katex/katex.min.css'
        },
        katex_js: function () {
          // 这是你的katex.js路径
          return '/katex/katex.min.js'
        }
      }
    }
  },
  components: {
    mavonEditor
  }
}
</script>

<style>
.indexContainer{
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #f6f8f9;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
}
#editor {
    width: 90%;
    height: 90%;
    margin: auto;
    border: 1px solid #eee;
}
.markdown-body{
    width: 100%;
    height: 100%;
}
.footer{
  position: fixed;
  bottom: 5px;
}
</style>
