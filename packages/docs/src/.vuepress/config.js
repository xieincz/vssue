module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vssue',
      description: 'A Vue-powered Issue-based Comment Plugin',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vssue',
      description: 'Vue 驱动的、基于 Issue 的评论插件',
    },
  },

  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],

  markdown: {
    extendMarkdown: md => md.use(require('markdown-it-center-text')),
  },

  themeConfig: {
    repo: 'meteorlxy/vssue',

    editLinks: true,

    docsDir: 'packages/docs/src',

    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Vssue Guide',
            link: '/guide/',
          },
          {
            text: 'Options Reference',
            link: '/options/',
          },
          {
            text: 'Changelog',
            link: 'https://github.com/meteorlxy/vssue/blob/master/CHANGELOG.md',
          },
        ],
        sidebar: {
          '/guide/': sidebarGuide('Vssue Guide', 'Set up OAuth App'),
        },
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: 'Vssue 指南',
            link: '/zh/guide/',
          },
          {
            text: '配置参考',
            link: '/zh/options/',
          },
          {
            text: '更新日志',
            link: 'https://github.com/meteorlxy/vssue/blob/master/CHANGELOG.md',
          },
        ],
        sidebar: {
          '/zh/guide/': sidebarGuide('Vssue 指南', '创建 OAuth App'),
        },
      },
    },
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/medium-zoom',
    ['@vuepress/plugin-pwa', {
      serviceWorker: true,
      updatePopup: true,
    }],
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github',
      owner: 'meteorlxy',
      repo: 'vssue',
      clientId: 'a1097b7751127c6d1194',
      clientSecret: '5c95e2f890b6a2b80dbda17656e9b1db9e87a07b',
    }],
  ],
}

function sidebarGuide (titleGuide, titleOAuthApp) {
  return [
    {
      title: titleGuide,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'supported-platforms',
        'styles',
        'vuepress',
      ],
    },
    {
      title: titleOAuthApp,
      collapsable: false,
      children: [
        'github',
        'gitlab',
        'bitbucket',
      ],
    },
  ]
}
