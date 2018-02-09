let app = new Vue ({
  el: '#app',
  template: `
    <div id='app'>
      <sidebar @routeChange='routeChange' :route='route || "home"'></sidebar>
      <page @routeChange='routeChange' :route='route || "home"'></page>
    </div>`,
  data () {
    return {
      route: ''
    }
  },
  created () {
    window.onhashchange = () => {
      let route = /^(#\/)?(.*)$/.exec(window.location.hash)[2]
      if (this.route !== route) {
        this.route = route
      }
    }
    window.onhashchange()
  },
  watch: {
    route () {
      let hash = '#/' + this.route
      if (window.location.hash !== hash) {
        window.location.hash = hash
      }
      document.body.scrollTo(0, 0)
    }
  },
  methods: {
    routeChange(route) {
      this.route = route
    }
  }
})

stylr (`
  :root
    --theme-color #460c7f

  *
    font-family 'Avenir Next', 'Hiragino Sans', 'PingFang SC', 'Microsoft YaHei UI', sans-serif
    line-height 1.75em
    font-size 14px
    cursor default

  html, body
    margin 0
    padding 0
    background #fafafa
    color #333

  a, a:hover, a:active, a:visited
    color #555
    text-decoration underline
    text-decoration-color #ccc
    -webkit-text-decoration-color #ccc
    cursor pointer

    &:hover
      color #000

  p
    margin-top 0
    margin-bottom 0

  #app
    max-width 1000px
    margin 0 auto
    padding 0 25px
    display flex
    flex-direction row
    align-items flex-start
`)
