module.exports = {
  title: '[ RKM ]',
  description: 'アクアテラリウム',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    modifyBlogPluginOptions(opts) {
      return {
        ...opts,
        directories: [
          {
            id: 'post',
            dirname: 'posts',
            path: '/'
          }
        ],
        comment: {
          service: 'disqus',
          shortname: 'rikumi'
        }
      };
    }
  }
};
