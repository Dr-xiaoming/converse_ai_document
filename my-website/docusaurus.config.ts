import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'FastGPT',
  tagline: '基于 LLM 大语言模型的知识库问答系统',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],



  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'FastGPT',
      logo: {
        alt: 'FastGPT Logo',
        src: 'img/logo.svg',
        href: '/docs/intro',
        target: '_self',
      },
      hideOnScroll: false,
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: '使用文档'},
        {to: '/docs/使用案例', label: '使用案例', position: 'left'},
        {to: '/docs/常见问题', label: '常见问题', position: 'left'},
        {to: '/docs/更新日志', label: '更新日志', position: 'left'},
        {
          href: 'https://github.com/labring/FastGPT',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速开始',
              to: '/docs/intro',
            },
            {
              label: '使用案例',
              to: '/docs/使用案例',
            },
            {
              label: '常见问题',
              to: '/docs/常见问题',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/labring/FastGPT',
            },
            {
              label: 'Issues',
              href: 'https://github.com/labring/FastGPT/issues',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/labring/FastGPT/discussions',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '更新日志',
              to: '/docs/更新日志',
            },
            {
              label: '官方网站',
              href: 'https://fastgpt.cn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FastGPT Team. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
