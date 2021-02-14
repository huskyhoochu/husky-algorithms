module.exports = {
  title: '허스키후추 알고리즘',
  tagline: '알고리즘 자습 블로그',
  url: 'https://husky-algorithms.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'huskyhoochu', // Usually your GitHub org/user name.
  projectName: 'husky-algorithms', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Huskyhoochu Algorithms',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/huskyhoochu/husky-algorithms',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://www.huskyhoochu.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/huskyhoochu',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Huskyhoochu, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
