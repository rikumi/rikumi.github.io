 Vue.component('sidebar', {
  template: `
    <div class='sidebar'>
      <img class='avatar' :src='info.avatar'>
      <p class='nick'>{{ info.nick }}</p>
      <p class='sign'>{{ info.sign }}</p>
      <a class="github-button" href="https://github.com/rikumi" data-size="large" data-show-count="true">Follow</a>
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
    axios.get('/data/info.yml')
      .then(res => { this.info = jsyaml.load(res.data) })
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
    margin-top 70px
    top 70px

    *
      cursor default

    .avatar
      width 64px
      height 64px
      border-radius 50%
      margin-bottom 10px
      background #f0f0f0
      pointer-events none

    .nick
      font-size 32px
      font-weight bold

    .sign
      color #aaa

    a.github-button
      display none

    iframe[src^="https://buttons.github.io"]
      margin 20px 0
      filter contrast(1.4)

    .nav
      box-sizing border-box
      border-top 1px solid #f0f0f0
      margin-top 10px

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

          &:hover, &.selected
            color var(--theme-color)
`)
