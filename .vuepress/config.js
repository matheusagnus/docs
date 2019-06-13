// Entry file of configuration, can also be yml or toml.

module.exports = {
    title: 'ICS Docs',
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
        { text: 'Cloud', link: 'https://cloud.serpro.gov.br/' },
      ],
      // Liga direto ao repo git publico (github, gitlab)
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
        // '/guides/': [
        //   ''
        // ],
        '/guides/inicial/': [
          '',
          'criando-contexto',
          'disparando-instancia',
          'acesso-via-ssh',
          'criar-snapshot',
          'dicas-de-ip'
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
          '',
          'instancias',
          'imagens',
          'pares-de-chave',
          'grupos-de-servidores'
        ],
      '/guides/volumes/': [
        'criar-volume',
        'anexar-volume'
      ]


      }
    }
  }