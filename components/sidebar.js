 Vue.component('sidebar', {
  template: `
    <div class='sidebar'>
      <div class='header'>
        <img class='avatar' :src='info.avatar'>
        <p class='nick'>{{ info.nick }}</p>
        <p class='sign'>{{ info.sign }}</p>
        <a class="github-button" href="https://github.com/rikumi" data-size="large" data-show-count="true">Follow</a>
      </div>
      <div class='nav'>
        <div class='category' v-for='category in info.nav'>
          <p class='title'>{{ category.title }}</p>
          <div class='tags'>
            <div class='tag' :class='{ selected: tag.link === route }' v-for='tag in category.links' @click='navigate(tag.link)'>{{ tag.name }}</div>
          </div>
        </div>
      </div>
    </div>`,
  props: ['route'],
  data () {
    return {
      info: {}
    }
  },
  created () {
    getFile('/data/info.yml')
      .then(res => { this.info = jsyaml.load(res) })
  },
  methods: {
    navigate (dest) {
      if (/\/\//.test(dest)) {
        location.href = dest
      } else {
        this.$emit('routeChange', dest)
      }
    }
  }
})

stylr (`
  .sidebar
    width 120px
    overflow hidden
    display flex
    flex-shrink 0
    flex-direction column
    align-items flex-end
    position sticky
    position -webkit-sticky
    margin 70px 0
    top 70px
    z-index 9999

    @media screen and (max-width: 600px)
      width 100%
      align-items stretch
      margin 0
      top 0
      background #fff
      height 72px
      overflow visible

    *
      cursor default

    .header
      overflow hidden
      display flex
      flex-shrink 0
      flex-direction column
      align-items flex-end

      @media screen and (max-width: 600px)
        height 100%
        flex-direction row
        align-items center
        padding 0 10px

        * + *
          margin-left 15px

      .avatar
        width 64px
        height 64px
        border-radius 50%
        margin-bottom 10px
        background #f0f0f0
        pointer-events none

        @media screen and (max-width: 600px)
          width 48px
          height 48px
          margin-bottom 0

      .nick
        font-size 32px
        font-weight bold

        @media screen and (max-width: 600px)
          font-size 20px
          font-weight normal

      .sign
        color #aaa

        @media screen and (max-width: 600px)
          opacity 0
          flex 1 1 0

      a.github-button
        display none

      iframe[src^="https://buttons.github.io"]
        margin-top 20px
        margin-bottom 20px
        filter contrast(1.4) hue-rotate(45deg)

    .nav
      box-sizing border-box
      border-top 1px solid #f0f0f0
      margin-top 10px

      @media screen and (max-width: 600px)
        width auto
        margin-top 0
        pointer-events none

      .title
        margin 25px 0 5px
        color #aaa
        text-align right

      .tags
        width 100%
        display flex
        flex-direction column
        align-items flex-end

        .tag
          font-size 13px
          font-weight bold
          margin 3px 0
          color #000
          transition .2s
          cursor pointer
          border-bottom 1px solid var(--theme-color)

          @media screen and (max-width: 600px)
            background rgba(#fff, 0.9)
            pointer-events all

          &:hover, &.selected
            color var(--theme-color)
`)
