<template>
  <div class="layout">
    <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"><h1>在线markdown编辑器</h1></div>
            <div class="layout-nav">
              <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                <a href="https://blog.zhlzzz.com/markdown/e9cc80ad">帮助文档</a>
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <Content>
          <markdown-editor v-model="content" ref="markdownEditor" :configs="configs" :sanitize="true" :highlight="true"></markdown-editor>
        </Content>
        <Footer class="layout-footer-center">2017-2018 &copy; <a target="_blank" href="https://blog.zhlzzz.com">z.h.l</a></Footer>
    </Layout>
  </div>
</template>

<script>
import markdownEditor from 'vue-simplemde/src/markdown-editor'
import hljs from 'highlight.js'

export default {
  name: 'markdown',
  data () {
    return {
      content: '',
      configs: {
        autofocus: true,
        status: false, // 禁用底部状态栏
        spellChecker: false, // 禁用拼写检查
        autosave: {
          enabled: true,
          delay: 300000,
          uniqueId: 'zhlzzz_markdown'
        },
        promptURLs: false,
        hideIcons: ['guide'],
        renderingConfig: {
          singleLineBreaks: true,
          codeSyntaxHighlighting: true
        }
      }
    }
  },
  components: {
    markdownEditor
  },
  methods: {

  },
  mounted () {
    // this.simplemde.toggleSideBySide()
  },
  computed: {
    simplemde () {
      return this.$refs.markdownEditor.simplemde
    }
  }
}
window.hljs = hljs
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import 'simplemde/dist/simplemde.min.css';
/* @import 'github-markdown-css'; */
@import 'highlight.js/styles/atom-one-dark.css';
.markdown-editor .CodeMirror, .markdown-editor .CodeMirror-scroll {
  min-height: 768px;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    line-height: 30px;
}
.layout-logo h1{
    font-size: 24px;
    color:#d7dde4;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
.ivu-menu{
  z-index: 1!important;
}
.markdown-editor{
  font-size: 16px;
}
</style>
