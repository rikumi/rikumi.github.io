marked.setOptions({
  gfm: true, tables: true,
  highlight (code) {
    return hljs.highlightAuto(code).value
  }
})

Vue.component('page', {
  template: `
    <div class='page'>
      <div class='item' :class='"item-" + item.type' v-if='page' v-for='item in page'>
        <div v-if='item.type === "markdown"' v-html='item.content'></div>
        <music v-if='item.type === "music"' :id='item.id' :single='item.single' :auto='false'></music>
      </div>
      <div class='end'>
        {{ page ? page.length ? '到底了喵~' : '建设中喵~' : '加载中喵~' }}
      </div>
    </div>`,
  props: ['route'],
  data () {
    return {
      page: null
    }
  },
  created () {
    this.load()
  },
  watch: {
    route () {
      this.load()
    }
  },
  methods: {
    load () {
      axios.get(`/data/${this.route}.md?${Math.random()}`)
        .then(res => {
          console.log(res.data)
          this.page = res.data
            .replace(/(♪+\d+)/g, '\n\n---\n\n$1\n\n---\n\n')
            .split(/\s*\n\s*---\s*\n\s*/g)
            .map(k => {
              if (/^(♪+)(\d+)$/.test(k)) {
                return {
                  type: 'music',
                  single: RegExp.$1.length === 1,
                  id: RegExp.$2
                }
              } else {
                return {
                  type: 'markdown',
                  content: marked(k)
                }
              }
            })
        })
        .catch(e => this.page = [])
    },
    navigate (dest) {
      this.$emit('routeChange', dest)
    }
  }
})

stylr (`
  .hljs-comment,.hljs-quote{color:#8e908c}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#c82829}.hljs-number,.hljs-built_in,.hljs-builtin-name,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link{color:#f5871f}.hljs-attribute{color:#eab700}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:#718c00}.hljs-title,.hljs-section{color:#4271ae}.hljs-keyword,.hljs-selector-tag{color:#8959a8}.hljs{display:block;overflow-x:auto;background:white;color:#4d4d4c;padding:0.5em}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}

  .page
    flex 1 1 0
    margin 20px 0 25px 30px

    .item-markdown + .item-markdown
      border-top 1px solid #f0f0f0

    .item-markdown
      padding 15px 0

    .item
      border-top 1px solid transparent
      margin 0 15px
      transition .3s
      color #555
      text-align justify

      img
        display block
        max-width 100%
        max-height 500px
        margin 10px 0
        border-radius 5px
        filter brightness(0.98)
        position relative

      p
        margin 0.5em 0
        text-indent 1em

      pre, code
        font-family 'Fira Code', 'Source Code Pro', monospace
        font-size 95%
        margin 0 5px
        letter-spacing -0.015em
        line-height 1.5em

        *
          font-family inherit
          font-size inherit
          line-height inherit

      code
        padding 2px 5px
        background #f5f5f5
        border-radius 5px
        margin 0

      pre
        padding 10px 15px
        background #f5f5f5
        border-radius 5px
        margin 1em 0

      blockquote
        padding 10px 15px
        background #f5f5f5
        border-radius 5px
        margin 1em 0

      blockquote p
        text-indent 0
        margin 2px 0

      h1, h2, h3, h4, h5, h6
        font-size 16px
        font-weight normal

        &::before
          content '//'
          color #ccc
          margin-right 0.5em

      del
        background #555
        color #555
        border-radius 3px
        transition .3s

        &:active, &:hover
          background transparent

    .end
      text-align center
      padding 30px 0
      margin 0 15px 25px
      border-top 1px solid #f0f0f0
      color #888
`)
