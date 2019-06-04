// Entry file of configuration, can also be yml or toml.

module.exports = {
    title: 'Cloud Serpro Docs',
    description: 'Just playing around',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guias',
        items: [
          { text: 'Guia Inicial', link: '/guides/inicial/'},
          { text: 'Computação', link: '/guides/computacao/' },
          { text: 'Volumes', link: '/guides/volumes/'},
          { text: 'Redes', link: '/guides/redes/' },
          { text: 'Orchestration', link: '/guides/orchestration/'}

        ]},
        { text: 'Nuvem', link: 'https://cloud.serpro.gov.br/' },
      ],
      // Assumes GitHub. Can also be a full GitLab url.
      repo: 'matheusagnus/docs',
      // Customising the header label
      // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
      repoLabel: 'Contribua!',
  
      // Optional options for generating "Edit this page" link
  
      // if your docs are in a different repo from your main project:
      docsRepo: 'matheusagnus/docs',
      // if your docs are not at the root of the repo:
      // docsDir: 'docs',
      // if your docs are in a specific branch (defaults to 'master'):
      docsBranch: 'master',
      // defaults to false, set to true to enable
      editLinks: true,
      // custom text for edit link. Defaults to "Edit this page"
      editLinkText: 'Nos ajude a melhorar esse conteúdo!',
      sidebar: {
        '/guides/inicial/': [
          '',
          'criando-contexto',
          'disparando-instancia',
          'acesso-via-ssh'
        ],
        '/guides/redes/': [
          'redes',
          'roteadores',
          'gruposDeSeguranca',
          'loadBalancers',
          'ipsFlutuantes',
          'firewalls'
        ],
        '/guides/computacao/': [
          'visaoGeral',
          'instancias',
          'imagens',
          'paresDeChave',
          'gruposDeServidores'

        ]


      }
    }
  }