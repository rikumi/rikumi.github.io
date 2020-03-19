module.exports = {
  locales: {
    '/': {
      lang: 'zh' // For disqus compatibility
    }
  },
  title: '/rkm/',
  description: 'Can you hear me?',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-148373443-1' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-148373443-1');
    `],
    ['script', { src: '/imouse.js' }],
    ['script', {}, `window.addEventListener('DOMContentLoaded', () => IMouse.default.init({
      defaultBackgroundColor: 'rgba(1, 80, 111, .15)',
      activeBackgroundColor: 'rgba(1, 80, 111, .25)',
      transitionDuration: 100,
    }))`]
  ],
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
