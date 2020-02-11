export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e425ee930c87582e1c4dc7f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-aquuz7n9',
                  apiId: 'ed2aff24-c35f-4976-92f7-a7c9ccc67f7c'
                },
                {
                  buildHookId: '5e425ee930c8753a0dc4dc8a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-obmeb5vn',
                  apiId: '8c55da27-c9a2-4dba-81cd-79a9d9582a7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/foreseaz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-obmeb5vn.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
