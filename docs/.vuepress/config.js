module.exports = {
    home: true,
    title: 'ORIRI BOOK',
    description: 'oriri book',
    base: '/oririBook/',
    themeConfig: {
        repo: 'oriri/book',
        editLinks: true,
        docsDir: 'docs',
        lastUpdated: 'Last Updated',
        search: true,
        sidebarDepth: 3,
        nav: [
                {
                    text: 'Home',
                    link: '/'
                },
                {
                    text: 'Front-end',
                    link: '/frontEnd/'
                }
        ],
        sidebar: {
            '/frontEnd/': [
                            {
                              title: 'DOCUMENT',
                              collapsable: true,
                              children: [
                                  'javascript'
                              ]
                          }
          ]
        }
    },
}