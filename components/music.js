Vue.component('music', {
  template: `
    <div class='music-wrapper'>
      <div class='music' @mousemove='changeHint()' @mouseleave='hideHint()'>
        <iframe frameborder='no' border='0' marginwidth='0' marginheight='0' :src='url'></iframe>
      </div>
      <div class='music-hint' :class='{ visible: hint1 }'>真的不想听一下喵？</div>
      <div class='music-hint' :class='{ visible: hint2 }'>点击播放喵</div>
    </div>`,
  props: ['id', 'single', 'auto'],
  data () {
    return {
      hint1: true,
      hint2: false
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
      width 320px
      max-width 100%
      height 30px
      overflow hidden
      border 5px solid #fff
      border-radius 5px
      background #fff
      position relative
      filter brightness(0.984)

      iframe
        width 340px
        height 52px
        display block
        filter contrast(1.2) grayscale()
        position absolute
        top -11px
        left -10px
        right -10px
        bottom -11px

    .music-hint
      position absolute
      left 300px
      top 0
      height 40px
      line-height 41px
      padding 0 10px
      border-radius 5px
      background #fff
      color #333
      box-shadow 0 2px 7px rgba(#000, .05)
      margin-left 5px
      transition .5s
      opacity 0
      pointer-events none
      white-space nowrap

      &.visible
        left 340px
        opacity 1

      &::before
        content ''
        position absolute
        left -5px
        top 15px
        border-top 5px solid transparent
        border-bottom 5px solid transparent
        border-right 5px solid #fff
`)
