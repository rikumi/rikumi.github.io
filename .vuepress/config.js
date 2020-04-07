module.exports = {
  locales: {
    '/': {
      lang: 'zh' // For disqus compatibility
    }
  },
  title: '/rkm/',
  description: 'Can you hear me?',
  head: [
    ['link', { rel: 'alternate', type: 'application/rss+xml', href: '/rss.xml', title: '/rkm/' }],
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
    }))`]
  ],
  plugins: {
    'rss-support': {
      site_url: 'https://blog.rikumi.dev',
      copyright: `${new Date().getFullYear()} Rikumi`,
      filter: (page) => {
        page.lastUpdated = +page.frontmatter.date + 8 * 3600000;
        return /posts\//.test(page.relativePath)
      },
      count: 50,
    }
  },
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
      },
      {
        text: 'RSS',
        link: 'https://blog.rikumi.dev/rss.xml'
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
