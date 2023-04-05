export default {
    title: 'violetBlog', //站点标题
    description: 'violet 学习笔记',//mate标签description，多用于搜索引擎抓取摘要
    themeConfig: {
        siteTitle: "violet",
        logo: "/logo.png",
        nav: [
            { text: "Guide", link: "/guide/" },
            { text: "GuideTest", link: "/guide/test" },
            { text: "github", link: "https://github.com/violetwzj" },
            {
                text: "Drop Menu",
                items: [
                    {
                        items: [
                          { text: "Item A1", link: "/item-A1" },
                          { text: "Item A2", link: "/item-A2" },
                        ],
                      },
                      {
                        items: [
                          { text: "Item B1", link: "/item-B1" },
                          { text: "Item B2", link: "/item-B2" },
                        ],
                      },
                ]
              },
          ],
          sidebar: [
            {
              text: "面试手写函数",
              items: [
                {
                  text: "promise实现ajax",
                  link: "/articles/promise实现ajax",
                },
                { text: "debounce", 
                link: "/articles/debounce" },
              ],
            },
            {
              text: "ES6",
              items: [
                {
                  text: "闭包",
                  link: "/articles/闭包",
                },
              ],
            },
          ],
      },
}