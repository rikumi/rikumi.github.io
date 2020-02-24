module.exports = {
  locales: {
    '/': {
      lang: 'zh' // For disqus compatibility
    }
  },
  title: '/rkm/',
  description: 'Can you hear me?',
  head: [['link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' }]],
  theme: 'journal',
  themeConfig: {
    summaryLength: 120,
    nav: [
      {
        text: '关于',
        link: '/about/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/rikumi'
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
