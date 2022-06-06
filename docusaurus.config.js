// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const editUrlFn = ({docPath}) => {
  return "https://docs.replit.com/__repl#" + docPath;
}

const redirects = [
  {
      from: '/misc/General-FAQ',
      to: '/getting-started/faq'
  }, {
      from: ['/repls/intro', '/getting-started/intro-replit'],
      to: '/'
  }, {
      from: '/repls/dashboard',
      to: '/getting-started/managing-repls'
  }, {
      from: '/repls/files',
      to: '/getting-started/creating-files'
  }, {
      from: '/misc/free-features',
      to: '/getting-started/using-replit-free'
  }, {
      from: '/repls/repl-auth',
      to: '/hosting/authenticating-users-repl-auth'
  }, {
      from: '/repls/vnc',
      to: '/hosting/streaming-native-graphics-vnc'
  }, {
      from: '/repls/apps-and-publishing',
      to: '/hosting/browsing-publishing-repls'
  }, {
      from: '/repls/strike-system-apps',
      to: '/hosting/strike-system-faq'
  }, {
      from: '/misc/database',
      to: '/hosting/database-faq'
  }, {
      from: '/repls/web-hosting',
      to: '/hosting/hosting-web-pages'
  }, {
      from: '/repls/http-servers',
      to: '/hosting/deploying-http-servers'
  }, {
      from: '/repls/embed',
      to: '/hosting/embedding-repls'
  }, {
      from: '/repls/always-on',
      to: '/hosting/enabling-always-on'
  }, {
      from: '/misc/security',
      to: '/legal-and-security-info/security'
  }, {
      from: '/misc/licensing',
      to: '/legal-and-security-info/licensing-info'
  }, {
      from: '/misc/copyright',
      to: '/legal-and-security-info/copyright-claims-takedown-requests'
  }, {
      from: '/repls/audio',
      to: '/misc/playing-audio-replit'
  }, {
      from: '/misc/basic',
      to: '/misc/classic-basic-replit'
  }, {
      from: '/misc/clui',
      to: '/misc/clui-graphical-cli'
  }, {
      from: '/repls/nix',
      to: '/programming-ide/nix-on-replit'
  }, {
      from: '/programming-ide/getting-started-nix',
      to: '/programming-ide/nix-on-replit'
  }, {
      from: '/repls/history',
      to: '/programming-ide/using-repl-history'
  }, {
      from: '/repls/packages',
      to: '/programming-ide/installing-packages'
  }, {
      from: '/repls/secrets-environment-variables',
      to: '/programming-ide/storing-sensitive-information-environment-variables'
  }, {
      from: '/repls/editor',
      to: '/programming-ide/working-shortcuts'
  }, {
      from: '/repls/repl-from-repo',
      to: '/programming-ide/running-github-repositories-replit'
  }, {
      from: '/misc/repl-environment-variables',
      to: '/programming-ide/getting-repl-metadata'
  }, {
      from: '/repls/dot-replit',
      to: '/programming-ide/configuring-repl'
  }, {
      from: '/misc/change-username',
      to: '/settings/changing-username'
  }, {
      from: '/curriculum/Intro',
      to: '/teaching-curriculum/intro-teaching-curriculum'
  }, {
      from: '/curriculum/introJava',
      to: '/teaching-curriculum/intro-java'
  }, {
      from: '/curriculum/introPython',
      to: '/teaching-curriculum/intro-python'
  }, {
      from: '/curriculum/intermediatePython',
      to: '/teaching-curriculum/intermediate-python'
  }, {
      from: '/curriculum/introHTMLCSS',
      to: '/teaching-curriculum/intro-html-css'
  }, {
      from: '/curriculum/introSQL',
      to: '/teaching-curriculum/intro-sql'
  }, {
      from: '/curriculum/abstractData',
      to: '/teaching-curriculum/abstract-data-types'
  }, {
      from: '/curriculum/introCpp',
      to: '/teaching-curriculum/intro-cpp'
  }, {
      from: '/repls/UnitTesting',
      to: '/teams-edu/unit-testing'
  }, {
      from: '/repls/multiplayer-anon',
      to: '/teams-edu/using-multiplayer-anonymous-users'
  }, {
      from: '/Teams/Invitations',
      to: '/teams-edu/inviting-teachers-students'
  }, {
      from: '/Teams/Nicknames',
      to: '/teams-edu/assigning-nicknames'
  }, {
      from: '/Teams/Roles',
      to: '/teams-edu/assigning-user-roles'
  }, {
      from: '/Teams/Projects',
      to: '/teams-edu/creating-projects-assignments'
  }, {
      from: '/Teams/projectCopying',
      to: '/teams-edu/copying-projects-other-teams'
  }, {
      from: '/Teams/Notes',
      to: '/teams-edu/keeping-notes-repls'
  },
  {
      from: '/Teams/HomeworkAssignments',
      to: '/teams-edu/example-homework-assignments'
  }, {
      from: '/Teams/Annotations',
      to: '/teams-edu/reviewing-submissions'
  }, {
      from: '/Teams/Testing',
      to: '/teams-edu/testing-assessments-autograding'
  }, {
      from: '/Teams/InputOutput',
      to: '/teams-edu/input-output-testing'
  }, {
      from: '/Teams/EmbedProjects',
      to: '/teams-edu/embedding-projects'
  }, {
      from: '/Teams/privacyFAQs',
      to: '/teams-edu/privacy-faq'
  }, {
      from: '/Teams/IT_Toolkit',
      to: '/teams-edu/it-administrators-toolkit'
  }, {
      from: '/pro/intro',
      to: '/teams-pro/intro-teams-pro'
  }, {
      from: '/pro/teamManagement',
      to: '/teams-pro/managing-teams'
  }, {
      from: '/pro/replManagement',
      to: '/teams-pro/managing-public-private-repls'
  }, {
      from: '/teams-pro/interviewing-candidates-guest-mode',
      to: '/teams-pro/interviewing-candidates'
  }, {
      from: '/pro/guests',
      to: '/teams-pro/interviewing-candidates'
  }, {
      from: '/repls/python-plots',
      to: '/tutorials/creating-interactive-python-plots-matplotlib'
  }, {
      from: '/tutorials/PinboardProjectPart1',
      to: '/tutorials/pinboard-project-part-1'
  }, {
      from: '/tutorials/PinboardProjectPart2',
      to: '/tutorials/pinboard-project-part-2'
  }, {
      from: '/tutorials/spotify-tutorials',
      to: '/tutorials/spotify-api-tutorials'
  }, {
      from: '/tutorials/kaboom',
      to: '/tutorials/kaboom-editor'
  }, {
      from: '/programming-ide/configuring-run-button',
      to: '/programming-ide/configuring-repl'
  },
  {
      from: "/tutorials/00-overview",
      to: "/tutorials/overview"
  }, {
      from: "/tutorials/01-introduction-to-the-repl-it-ide",
      to: "/tutorials/introduction-to-the-repl-it-ide"
  }, {
      from: "/tutorials/02-managing-files-using-repl-it",
      to: "/tutorials/managing-files-using-repl-it"
  }, {
      from: "/tutorials/03-handling-dependencies-with-repl-it",
      to: "/tutorials/handling-dependencies-with-repl-it"
  }, {
      from: "/tutorials/04-data-science-and-visualisation-with-repl-it",
      to: "/tutorials/data-science-and-visualisation-with-repl-it"
  }, {
      from: "/tutorials/05-pair-programming-using-multiplayer-with-repl-it",
      to: "/tutorials/pair-programming-using-multiplayer-with-repl-it"
  }, {
      from: "/tutorials/06-github-and-run-button",
      to: "/tutorials/github-and-run-button"
  }, {
      from: "/tutorials/07-building-a-game-with-pygame",
      to: "/tutorials/building-a-game-with-pygame"
  }, {
      from: "/tutorials/08-storing-secrets-and-history",
      to: "/tutorials/storing-secrets-and-history"
  }, {
      from: "/tutorials/09-test-driven-development",
      to: "/tutorials/test-driven-development"
  }, {
      from: "/tutorials/10-productivity-hacks",
      to: "/tutorials/productivity-hacks"
  }, {
      from: "/tutorials/11-using-the-replit-database",
      to: "/tutorials/using-the-replit-database"
  }, {
      from: "/tutorials/12-audio",
      to: "/tutorials/audio"
  }, {
      from: "/tutorials/13-steganography",
      to: "/tutorials/steganography"
  }, {
      from: "/tutorials/14-2d-platform-game",
      to: "/tutorials/2d-platform-game"
  }, {
      from: "/tutorials/15-repl-chat",
      to: "/tutorials/repl-chat"
  }, {
      from: "/tutorials/16-static-site-generator",
      to: "/tutorials/static-site-generator"
  }, {
      from: "/tutorials/17-predictive-text-engine",
      to: "/tutorials/predictive-text-engine"
  }, {
      from: "/tutorials/18-telegram-bot",
      to: "/tutorials/telegram-bot"
  }, {
      from: "/tutorials/19-build-snake-with-pygame",
      to: "/tutorials/build-snake-with-pygame"
  }, {
      from: "/tutorials/20-online-store-checkout-process",
      to: "/tutorials/online-store-checkout-process"
  }, {
      from: "/tutorials/21-build-snake-with-kaboom",
      to: "/tutorials/build-snake-with-kaboom"
  }, {
      from: "/tutorials/22-personal-stock-market-dashboard",
      to: "/tutorials/personal-stock-market-dashboard"
  }, {
      from: "/tutorials/23-build-asteroids-with-kaboom",
      to: "/tutorials/build-asteroids-with-kaboom"
  }, {
      from: "/tutorials/24-build-space-shooter-with-kaboom",
      to: "/tutorials/build-space-shooter-with-kaboom"
  }, {
      from: "/tutorials/25-build-3d-game-with-kaboom",
      to: "/tutorials/build-3d-game-with-kaboom"
  }, {
      from: "/tutorials/26-pdf-report-generator-from-spreadsheet",
      to: "/tutorials/pdf-report-generator-from-spreadsheet"
  }, {
      from: "/tutorials/27-build-tictactoe-with-websockets-kaboom",
      to: "/tutorials/build-tictactoe-with-websockets-kaboom"
  }, {
      from: "/tutorials/28-technical-challenge-site",
      to: "/tutorials/technical-challenge-site"
  }, {
      from: "/tutorials/29-paid-content-site",
      to: "/tutorials/paid-content-site"
  }, {
      from: "/tutorials/30-build-with-nix",
      to: "/tutorials/build-with-nix"
  }, {
      from: "/tutorials/31-build-news-digest-app-with-nix",
      to: "/tutorials/build-news-digest-app-with-nix"
  }, {
      from: "/tutorials/32-build-mario-with-kaboom",
      to: "/tutorials/build-mario-with-kaboom"
  }, {
      from: "/tutorials/33-escrow-contract-with-solidity",
      to: "/tutorials/escrow-contract-with-solidity"
  }, {
      from: "/tutorials/34-creative-coding",
      to: "/tutorials/creative-coding"
  }, {
      from: "/tutorials/35-build-flappy-bird-with-kaboom",
      to: "/tutorials/build-flappy-bird-with-kaboom"
  }, {
      from: "/tutorials/36-physics-playground-with-kaboom",
      to: "/tutorials/physics-playground-with-kaboom"
  }, {
      from: "/tutorials/37-build-breakout-with-kaboom",
      to: "/tutorials/build-breakout-with-kaboom"
  }, {
      from: "/tutorials/38-3D-rendering-with-threejs",
      to: "/tutorials/3D-rendering-with-threejs"
  }, {
      from: "/tutorials/39-two-player-wordle-clone-python-rich",
      to: "/tutorials/two-player-wordle-clone-python-rich"
  }, {
      from: "/tutorials/40-build-host-company-blog-on-replit-with-hugo-nix",
      to: "/tutorials/build-host-company-blog-on-replit-with-hugo-nix"
  }, {
      from: "/tutorials/41-build-space-invaders-with-kaboom",
      to: "/tutorials/build-space-invaders-with-kaboom"
  }, {
      from: "/tutorials/42-build-a-robot-nft",
      to: "/tutorials/build-a-robot-nft"
  }, {
      from: "/tutorials/43-build-a-robot-nft-p2",
      to: "/tutorials/build-a-robot-nft-p2"
  }, {
      from: "/tutorials/44-build-smart-contract-oracle",
      to: "/tutorials/build-smart-contract-oracle"
  }
]

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Replit Docs',
  tagline: 'Learn how to use Replit',
  url: 'https://docs.replit.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'replit',
  projectName: 'replit-docs-2',
  favicon: 'image/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    "./plugins/analytics",
    "./plugins/frame-comms",
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: redirects,
        createRedirects(existingPath) {
          if (existingPath.includes('/teams-edu')) {
            return [
              existingPath.replace('/teams-edu', '/teams'),
            ];
          }
          return undefined;
        },
      }
    ]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: editUrlFn,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],
  // themes: [
  //   [
  //     require.resolve("@easyops-cn/docusaurus-search-local"),
  //     {
  //       hashed: true,
  //       docsRouteBasePath: '/',
  //       highlightSearchTermsOnTargetPage: true,
  //     },
  //   ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    { 
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        items: [
          {label: 'Features',
           href: 'https://replit.com/site/ide',
           target: '_blank'},
          {label: 'Careers',
           href: 'https://replit.com/site/careers',
           target: '_blank'},
          {label: 'Blog',
           href: 'https://blog.replit.com',
           target: '_blank'},
          {label: 'Jam',
           href: 'https://replit.com/site/kajam',
           target: '_blank'},
          {type: 'search',
          position: 'right'},
          {type: 'html',
           position: 'right',
           value: `<a href="https://replit.com/signup" target="_blank" class="sign-up-button">Sign up</a>`}
        ],
        logo: {
          alt: 'Replit Logo',
          src: 'image/logo.svg',
          srcDark: 'image/logoDark.svg',
          href: 'https://replit.com',
          target: '_blank'
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '33H1G1RMZJ',
        apiKey: '17617634403a792c4cf6f749c49ae0aa',
        indexName: 'replit-docs',
        contextualSearch: true
      },
    },
};

module.exports = config;