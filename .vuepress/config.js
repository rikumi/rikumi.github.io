module.exports = {
  locales: {
    '/': {
      lang: 'zh' // For disqus compatibility
    }
  },
  title: '[ RKM ]',
  description: 'アクアテラリウム',
  head: [['link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' }]],
  theme: 'journal',
  themeConfig: {
    nav: [
      {
        text: '关于',
        link: '/about/'
      },
      {
        text: '朋友们',
        link: '/friends/'
      },
      {
        text: '作品',
        link: '/works/'
      }
    ],
    modifyBlogPluginOptions(opts) {
      return {
        ...opts,
        comment: {
          service: 'disqus',
          shortname: 'rikumi'
        }
      };
    }
  }
};
