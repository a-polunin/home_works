const data =
{
  tag: 'html',
  attributes: {
    lang: 'en'
  },
  childs: [
    {
      tag: 'head',
      childs: [
        {
          tag: 'title',
          childs: [
            'Document'
          ]
        }
      ]
    },
    {
      tag: 'body',
      childs: [
        {
          tag: 'div',
          attributes: {
            'class': 'block',
          },
          childs: [
            {
              tag: 'ul',
              childs: [
                {
                  tag: 'li',
                  childs: [
                    'text_1',
                  ]
                },
                {
                  tag: 'li',
                  childs: [
                    'text_2',
                  ]
                },
                {
                  tag: 'li',
                  childs: [
                    'text_3',
                  ]
                }
              ]
            },
            {
              tag: 'ol',
              childs: [
                {
                  tag: 'li',
                  childs: [
                    'text_1',
                  ]
                },
                {
                  tag: 'li',
                  childs: [
                    'text_2',
                  ]
                },
                {
                  tag: 'li',
                  childs: [
                    'text_3',
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}


module.exports = {
  data: data
}