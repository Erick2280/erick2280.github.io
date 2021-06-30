export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Erick Almeida',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['nuxt-i18n', {
      detectBrowserLanguage: {
        useCookie: false,
        onlyOnRoot: true,
      },
      baseUrl: 'https://erickalmeida.com.br'
    }],
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Erick Almeida',
      short_name: 'Erick Almeida',
      background_color: '#FFFDF8',
    },
    meta: {
      name: 'Erick Almeida',
      favicon: false,
      theme_color: '#0F854E',
      ogHost: 'https://erickalmeida.com.br',
      ogImage: '/banner.png',
    },
  },

  googleFonts: {
    families: {
      'DM+Sans': [700],
      'Space+Mono': {
        wght: ['400', '700'],
        ital: ['400'],
      },
    },
    display: 'swap',
  },

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'pt-BR',
        iso: 'pt-BR',
        name: 'Português do Brasil'
      },
    ],
    strategy: 'prefix_and_default',
    defaultLocale: 'pt-BR',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        'pt-BR': {
          languageSwitcher: {
            current: 'Idioma: {localeName}',
            linkToSwitch: 'Ver em {localeName}',
          },
          mainSection: {
            artwork: {
              title: 'Foto de Erick Almeida',
              alternativeText: 'No primeiro plano está Erick Almeida, um jovem branco, de cabelo curto, olhos castanhos e que usa óculos. Ele está sorrindo e usando uma camisa vinho. A foto está recortada com apenas o busto, sobre um círculo verde. Ao redor, estão três círculos verdes menores.'
            },
            greeting: 'Oi, cristal! Tudo bem?',
            aboutMe: {
              text: 'Sou {name} (ele/dele), estudante de Ciência da Computação, entusiasta da web, curioso sobre design e iraraense.'
            },
            facts: {
              pursuingBachelorOfScience: 'Bacharelando em {courseName} na {universityName}',
              extensionProjectParticipant: 'Bolsista na {extensionProjectName}',
              programMember: 'Membro do {programName}',
              softwareDeveloper: 'Desenvolvedor de Software no {locationName}',
              courseName: 'Ciência da Computação',
              universityName: 'Universidade Federal de Pernambuco',
            },
            shortcuts: {
              jumpTo: 'Ir para',
            },
          },
          featuredProjectsSection: {
            title: 'Projetos em destaque',
            cordscrobbler: {
              description: 'Um bot para Discord que realiza scrobbling de músicas tocadas por outros bots para o Last.fm.',
            },
            gera: {
              description: 'Um app para fazer cobranças de forma simples e divertida através do Apple Wallet.',
            },
            covidmunicipal: {
              description: 'Uma ferramenta para acompanhar dados acerca da pandemia de COVID-19 no âmbito municipal.',
            },
            dinesdonkey: {
              description: 'Uma experiência que apresenta a festividade da Burrinha de Dinê e um pouco da cultura da cidade de Irará.',
            },
            rusbe: {
              description: 'Um aplicativo progressivo para acompanhar informações acerca do Restaurante Universitário da UFPE.',
            },
            pelejo: {
              description: 'Um jogo de sobrevivência ambientado no sertão inspirado no livro {bookName}, de Graciliano Ramos.',
              bookName: 'Vidas Secas',
            },
            linkToGitHub: 'Página do {projectName} no GitHub',
            linkToAppStore: 'Página do {projectName} na App Store',
            linkToInstagram: 'Página do {projectName} no Instagram',
            linkToTopgg: 'Página do {projectName} no top.gg',
            linkToWebApp: 'Web app do {projectName}',
          },
          presentationsAndLecturesSection: {
            title: 'Apresentações e palestras',
            webForEveryone: {
              title: 'Uma web para todos: a importância do front-end na difusão de uma internet acessível para todas as pessoas',
              description: 'Participou de um painel digital em que debateu sobre a necessidade de pensar em acessibilidade ao desenvolver experiências para a web.',
            },
            developingWithAccessibilityInMind: {
              title: 'No fim, é sobre pessoas: Desenvolvendo com acessibilidade em mente',
              description: 'Palestrou sobre a importância da acessibilidade no desenvolvimento de software, independentemente de plataforma ou ferramenta.',
            }
          },
          awardsSection: {
            title: 'Prêmios',
            campusMobile2020: {
              title: 'Equipe vencedora na categoria Saúde (Autapp)',
              subtitle: {
                name: '8º Campus Mobile (2020)',
                issuer: 'Instituto Claro',
              },
              description: 'Integrou a equipe vencedora do concurso de inovação nacional pela criação de uma ferramenta que visa auxiliar terapeutas no acompanhamento de crianças autistas.',
            },
            campusPartyNatal2019: {
              title: 'Equipe vencedora (Nísia)',
              subtitle: {
                name: 'Hackathon A Justiça de Excelência na Palma da Mão',
                issuer: 'Campus Party Natal 2019',
              },
              description: 'Integrou a equipe premiada, com menção honrosa de nota máxima em todos os quesitos, por desenvolver um serviço de atendimento ao cidadão através de chat para a Justiça Federal.',
            },
            campusPartyBrasil2019: {
              title: 'Equipe vencedora (Luma)',
              subtitle: {
                name: 'Hackathon Liberty Seguros',
                issuer: 'Campus Party Brasil 2019',
              },
              description: 'Integrou a equipe premiada por desenvolver uma ferramenta que ajuda corretores de seguros a coletar dados de clientes e contatá-los através de redes sociais.',
            },
            outstandingFreshman: {
              title: 'Prêmio Calouro Destaque 2018',
              subtitle: {
                issuer: {
                  name: 'INEP {fullName}',
                  fullName: '(Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira)',
                },
              },
            },
            campusPartyBrasilia2018: {
              title: 'Equipe vencedora (Reciclômetro)',
              subtitle: {
                name: 'Hackathon Brasília Lixo Zero',
                issuer: 'Campus Party Brasília 2018',
              },
              description: 'Integrou a equipe premiada por desenvolver um serviço que indica se um produto é reciclável e um local de descarte adequado através da foto da embalagem tirada pelo usuário.',
            },
            campusPartyBahia2018: {
              title: 'Equipe vencedora (Roda Cultural)',
              subtitle: {
                name: 'Hackathon Desafios Bahia: Cultura',
                issuer: 'Campus Party Bahia 2018',
              },
              description: 'Integrou a equipe premiada por desenvolver um aplicativo com um chatbot que sugere locais e eventos culturais para visitar com base em interesses.',
            },
          },
          getInTouchSection: {
            title: 'Me encontre nas redes',
            linkToMail: 'Enviar um e-mail para {mailAddress}',
            linkToGitHub: 'Perfil de Erick Almeida no GitHub',
            linkToLinkedin: 'Perfil de Erick Almeida no Linkedin',
            linkToTwitter: 'Perfil de Erick Almeida no Twitter',
            linkToTelegram: 'Enviar uma mensagem através do Telegram',
            linkToDiscord: 'Enviar uma mensagem através do Discord',
            linkToGooglePlay: 'Página de Erick Almeida no Google Play',
            linkToAppStore: 'Página de Erick Almeida na App Store',
          },
          footer: {
            note: {
              text: 'Feito com {emoticon} por Erick Almeida.',
              emoticon: {
                text: '<3',
                altText: 'amor',
              },
            },
            openSourceNotice: 'O código-fonte desta página está disponível no GitHub.',
          },
        },
        en: {
          languageSwitcher: {
            current: 'Language: {localeName}',
            linkToSwitch: 'View in {localeName}',
          },
          mainSection: {
            artwork: {
              title: `Erick Almeida's photo`,
              alternativeText: 'In the foreground is Erick Almeida, a young Latino man with short hair and brown eyes wearing glasses. He is smiling and wearing a burgundy shirt. The photo shows only the bust, over a green circle. Around it is three smaller green circles.',
            },
            greeting: 'Hi there! All good?',
            aboutMe: {
              text: `I'm {name} (he/him), Computer Science student, web enthusiast, curious about design and from Irará, Bahia, Brazil.`
            },
            facts: {
              pursuingBachelorOfScience: 'Pursuing B.S. in {courseName} at {universityName}',
              extensionProjectParticipant: 'Participant in the {extensionProjectName} extension project',
              programMember: 'Member of {programName}',
              softwareDeveloper: 'Software Developer at {locationName}',
              courseName: 'Computer Science',
              universityName: 'Federal University of Pernambuco',
            },
            shortcuts: {
              jumpTo: 'Jump to',
            },
          },
          featuredProjectsSection: {
            title: 'Featured projects',
            cordscrobbler: {
              description: 'A Discord bot that scrobbles songs played by other bots to Last.fm.',
            },
            gera: {
              description: 'An app to request money in a simple and fun way through Apple Wallet.',
            },
            covidmunicipal: {
              description: 'A tool to track data about the COVID-19 pandemic at the municipal level.',
            },
            dinesdonkey: {
              description: 'An experience that presents the festivity of Burrinha de Dinê and the culture of Irará.',
            },
            rusbe: {
              description: 'A progressive web app to track information about the UFPE University Restaurant.',
            },
            pelejo: {
              description: 'A survival game set in the Northeast Brazil backlands inspired by Graciliano Ramos book {bookName}.',
              bookName: 'Barren Lives',
            },
            linkToGitHub: '{projectName} page on GitHub',
            linkToAppStore: '{projectName} page on App Store',
            linkToInstagram: '{projectName} page on Instagram',
            linkToTopgg: '{projectName} page on top.gg',
            linkToWebApp: '{projectName} web app',
          },
          presentationsAndLecturesSection: {
            title: 'Presentations and lectures',
            webForEveryone: {
              title: 'A web for everyone: the importance of the front-end in making the internet accessible for all people',
              description: 'Participated in a discussion about the need to think about accessibility when developing experiences for the web.',
            },
            developingWithAccessibilityInMind: {
              title: `In the end, it's about people: Developing with accessibility in mind`,
              description: 'Spoke about the importance of accessibility in software development, regardless of platform or tool.',
            }
          },
          awardsSection: {
            title: 'Awards',
            campusMobile2020: {
              title: '1st Place Team, Health category (Autapp)',
              subtitle: {
                name: 'Campus Mobile 8th Edition (2020)',
                issuer: 'Instituto Claro',
              },
              description: 'Part of the winning team of this national innovation contest. They created a tool that aims to help therapists monitor autistic children.',
            },
            campusPartyNatal2019: {
              title: '1st Place Team (Nísia)',
              subtitle: {
                name: 'Justice of Excellence in the Hand Hackathon',
                issuer: 'Campus Party Natal 2019',
              },
              description: 'Part of the awarded team for developing a citizen service via chat for the Federal Court, simplifying the legal language.',
            },
            campusPartyBrasil2019: {
              title: '1st Place Team (Luma)',
              subtitle: {
                name: 'Liberty Insurance Hackathon',
                issuer: 'Campus Party Brasil 2019',
              },
              description: 'Part of the winning team for developing a tool that helps insurance brokers collect customer data and contact them through social networks.',
            },
            outstandingFreshman: {
              title: 'Outstanding Freshman Award 2018',
              subtitle: {
                issuer: {
                  name: 'INEP {fullName}',
                  fullName: '(National Institute of Educational Studies and Research Anísio Teixeira)',
                },
              },
            },
            campusPartyBrasilia2018: {
              title: '1st Place Team (Reciclômetro)',
              subtitle: {
                name: 'Zero Waste Brasília Hackathon',
                issuer: 'Campus Party Brasília 2018',
              },
              description: 'Part of the winning team for developing a service that indicates whether a product is recyclable and a suitable disposal site through a photo of the packaging taken by the user.',
            },
            campusPartyBahia2018: {
              title: '1st Place Team (Roda Cultural)',
              subtitle: {
                name: 'Hackathon Desafios Bahia: Cultura',
                issuer: 'Campus Party Bahia 2018',
              },
              description: 'Part of the winning team for developing an app with a chatbot that suggests places and cultural events based on user interests.',
            },
          },
          getInTouchSection: {
            title: 'Get in touch',
            linkToMail: 'Send an e-mail to {mailAddress}',
            linkToGitHub: `Erick Almeida's profile on GitHub`,
            linkToLinkedin: `Erick Almeida's profile on Linkedin`,
            linkToTwitter: `Erick Almeida's profile on Twitter`,
            linkToTelegram: `Send a message via Telegram`,
            linkToDiscord: `Send a message via Discord`,
            linkToGooglePlay: `Erick Almeida's page on Google Play`,
            linkToAppStore: `Erick Almeida's page on App Store`,
          },
          footer: {
            note: {
              text: 'Made with {emoticon} by Erick Almeida.',
              emoticon: {
                text: '<3',
                altText: 'love',
              },
            },
            openSourceNotice: 'The source code for this page is available on GitHub.',
          },
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
