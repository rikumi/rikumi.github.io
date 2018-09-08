Vue.component('music', {
  template: `
    <pre v-if='isZeroNet'>由于 API 限制，ZeroNet 中无法加载网易云插件。</pre>
    <div v-else class='music-wrapper'>
      <div class='music' @mousemove='changeHint()' @mouseleave='hideHint()'>
        <iframe frameborder='no' border='0' marginwidth='0' marginheight='0' :src='url'></iframe>
      </div>
      <!-- <div class='music-hint' :class='{ visible: hint1 }'>戳这里</div> -->
      <!-- <div class='music-hint' :class='{ visible: hint2 }'>戳这里</div> -->
    </div>`,
  props: ['id', 'single', 'auto'],
  data () {
    return {
      hint1: true,
      hint2: false,
      isZeroNet: window !== window.top
    }
  },
  computed: {
    url () {
      return `//music.163.com/outchain/player?type=${ this.single ? 2 : 0 }&id=${ this.id }&auto=${ this.auto ? 1 : 0 }&height=32`
    }
  },
  methods: {
    changeHint() {
      this.hint1 = false
      this.hint2 = true
    },
    hideHint() {
      this.hint1 = false
      this.hint2 = false
    }
  }
})

stylr (`
  .music-wrapper
    position relative

    .music
      width 280px
      max-width 100%
      height 30px
      overflow hidden
      background #fff
      position relative
      margin-left -5px

      iframe
        width 340px
        height 52px
        display block
        filter contrast(1) grayscale()
        position absolute
        top -11px
        left -45px
        right -25px
        bottom -11px

    .music-hint
      position absolute
      left 260px
      top 0
      height 30px
      font-size 14px
      line-height 30px
      padding 0 10px
      background #fff
      color #333
      box-shadow 0 2px 10px rgba(#000, .1)
      margin-left 5px
      transition .5s
      opacity 0
      pointer-events none
      white-space nowrap

      &.visible
        left 280px
        opacity 1

      &::before
        content ''
        position absolute
        left -5px
        top 10px
        border-top 5px solid transparent
        border-bottom 5px solid transparent
        border-right 5px solid #fff
`)
