export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5ea26d13504e458477d18ed7',
                  title: 'Sanity Studio',
                  name: 'injured-nurses-blog-studio',
                  apiId: '348cabe9-f607-44a0-b907-8cc69a1ecb5b'
                },
                {
                  buildHookId: '5ea26d13b34b0e4b82c37fbb',
                  title: 'Blog Website',
                  name: 'injured-nurses-blog',
                  apiId: '9097bb7c-969e-4f96-8abb-746fb7460a94'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/moutansos/injured-nurses-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://injured-nurses-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
