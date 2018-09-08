marked.setOptions({
  gfm: true, tables: true,
  highlight (code, lang) {
    return hljs.highlightAuto(code, [lang]).value
  }
})

Vue.component('page', {
  template: `
    <div class='page'>
      <div class='item' :class='"item-" + item.type' v-if='page' v-for='item in page'>
        <div v-if='item.type === "markdown"' v-html='item.content'></div>
        <music v-if='item.type === "music"' :id='item.id' :single='item.single' :auto='false'></music>
      </div>
      <div class='item end'>
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
    },
    page () {
      window.scrollTo(0, 0)
    }
  },
  methods: {
    load () {
      getFile(`/data/${this.route}.md`)
        .then(res => {
          console.log(res)
          this.page = res
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
    flex 1 1 auto
    margin 30px 0 25px 30px
    overflow hidden

    @media screen and (max-width: 600px)
      margin 0 0 25px

    *
      font-size 17px

    .item-markdown + .item-markdown
      border-top 1px solid #f0f0f0

    // .item-markdown
    //   padding 15px 0

    .item
      border-top 1px solid transparent
      margin 0 15px
      transition .3s
      color #555
      // text-align justify

      @media screen and (max-width: 600px)
        margin 0 10px

      img
        display block
        max-width 100%
        max-height 600px
        margin 10px auto
        position relative

      p
        margin 1.5em 0

      pre, code
        font-family 'Fira Code', 'Source Code Pro', monospace
        font-size 95%
        letter-spacing -0.015em
        line-height 1.5em

        *
          font-family inherit
          font-size inherit
          line-height inherit

      h1 code, h2 code, h3 code, h4 code, h5 code, h6 code
        font-family inherit

      ul
        padding-left 1.5em

      code
        background #fafafa
        margin 0

      pre
        padding 10px 15px
        background #fafafa
        margin 1em 0

      blockquote
        padding 10px 15px
        background #fafafa
        margin 1em 0

      blockquote p
        text-indent 0
        margin 2px 0

      h1, h2, h3, h4, h5, h6
        font-weight bold
        color #000
        text-align left

      h1
        font-size 32px

      h2
        font-size 28px

      h3
        font-size 26px

      h4
        font-size 24px

      h5
        font-size 22px

      h6
        font-size 20px

      del
        background #555
        color #555
        transition .3s
        text-decoration-color #333
        -webkit-text-decoration-color #333

        &:active, &:hover
          background #ccc

      table
        text-align justify
        word-wrap break-word
        word-break break-all
        width 100%
        overflow auto
        border-collapse collapse

      table th, table td
        padding 5px 10px
        border 1px solid #f0f0f0
        border-collapse collapse

      table tr
        border-top 1px solid #f0f0f0
        border-collapse collapse

    .end
      padding 5px 10px
      background #fafafa
      display inline-block
      margin-bottom 30px
      color #888

      &:first-child
        margin-top 45px
`)
