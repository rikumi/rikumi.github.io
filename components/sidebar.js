 Vue.component('sidebar', {
  template: `
    <div class='sidebar'>
      <img class='avatar' :src='info.avatar'>
      <p class='nick'>{{ info.nick }}</p>
      <p class='sign'>{{ info.sign }}</p>
      <div class='nav'>
        <div class='category' v-for='category in info.nav'>
          <p class='title'>{{ category.title }}</p>
          <div class='tags'>
            <div class='tag' :class='{ selected: tag.link === route }' v-for='tag in category.links' @click='navigate(tag.link)'>{{ tag.name }}</div>
          </div>
        </div>
      </div>
      <a class="github-button" href="https://github.com/rikumi" data-size="large" data-show-count="true">Follow</a>
      <p class="theme">Theme「寒霜」by rikumi</p>
    </div>`,
  props: ['route'],
  data () {
    return {
      info: {}
    }
  },
  created () {
    axios.get('/data/info.yml')
      .then(res => { this.info = jsyaml.load(res.data) })
  },
  methods: {
    navigate (dest) {
      this.$emit('routeChange', dest)
    }
  }
})

stylr (`
  .sidebar
    width 240px
    overflow hidden
    display flex
    flex-shrink 0
    flex-direction column
    align-items center
    padding 20px 0 0
    margin 25px 0
    border-radius 5px
    box-shadow 0 2px 7px rgba(#000, .05)
    background #fff
    position sticky
    position -webkit-sticky
    top 25px

    *
      cursor default

    .avatar
      width 160px
      height 160px
      border-radius 50%
      margin-bottom 10px
      background #f0f0f0
      pointer-events none

    .nick
      font-size 18px

    .sign
      color #888

    .nav
      padding 35px 25px
      width 100%
      box-sizing border-box

      .title
        margin 15px 0
        color #555
        text-align center

        &::before
          content ' / '

        &::after
          content ' / '

      .tags
        width 100%
        display flex
        flex-direction row
        align-items flex-start
        flex-wrap wrap
        justify-content center

        .tag
          background #fafafa
          padding 2px 10px
          border-radius 3px
          margin 4px
          color #555
          transition .2s
          cursor pointer

          &:hover
            background #f0f0f0

          &.selected
            background #555
            color #fff

            &:hover
              background #333

    iframe[src^="https://buttons.github.io"]
      filter contrast(1.3)

    .theme
      padding 15px
      width 100%
      background #fafafa
      color #aaa
      text-align center
      margin-top 20px
`)
