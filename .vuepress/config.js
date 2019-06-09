module.exports = {
    title: '🌟 Oriri\'s gram',
    description: '정리공간',
    base: '/',
    markdown: {
      lineNumbers: false
    },
    plugins: [
      '@vuepress/back-to-top',
      'flowchart'
    ],
    themeConfig: {
        lastUpdated: 'Last Updated',
        search: true,
        nav: [
                {
                    text: 'Home',
                    link: '/'
                },
                {
                    text: 'Front-end',
                    items : [
                        {
                            text: 'Language', 
                            items: [
                                { text: 'JAVASCRIPT', link: '/frontEnd/javascript/' }
                            ]
                        }
                    ]
                },
                {
                    text: 'Back-end',
                    items : [
                        {
                            text: 'Language', 
                            items: [
                                { text: 'JAVA', link: '/backEnd/java/' }
                            ]
                        }
                    ]
                }
        ],
        sidebar: {
            '/frontEnd/': [
                {
                    'title': 'General', 
                    'children': [
                        '/frontEnd/javascript/general/engine'
                    ]
                },
                {
                    'title': 'DesignPattern', 
                    'children': [
                        '/frontEnd/javascript/designPattern/',
                        '/frontEnd/javascript/designPattern/module',
                        '/frontEnd/javascript/designPattern/singleton',
                        '/frontEnd/javascript/designPattern/observer'
                    ]
                }
            ],
            '/backEnd/java/': [
                {
                    'title': 'General', 
                    'children': [
                        '/backEnd/java/general/JVM'
                    ]
                },
                {
                    'title': 'DesignPattern', 
                    'children': [
                        '/backEnd/java/designPattern/',
                        '/backEnd/java/designPattern/singleton',
                        '/backEnd/java/designPattern/strategy'
                    ]
                }
            ]
        }
    },
  };