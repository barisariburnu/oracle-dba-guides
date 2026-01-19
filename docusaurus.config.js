// @ts-check

const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oracle DBA Guides',
  tagline: 'Technical documentation and guides for Oracle Database Administrators',
  favicon: 'img/favicon.ico',
  url: 'https://barisariburnu.github.io',
  baseUrl: '/oracle-dba-guides/',
  organizationName: 'barisariburnu',
  projectName: 'oracle-dba-guides',
  trailingSlash: false,
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Oracle DBA Guides',
      items: [
        { to: '/', label: 'Blog', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Oracle DBA Guides.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ['sql', 'bash'],
    },
  },
};

module.exports = config;
