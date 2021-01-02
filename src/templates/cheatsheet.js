import React from "react"
import {Card, Typography, Breadcrumb} from 'antd';
import {graphql} from "gatsby"
import hastToHyperScript from 'hast-to-hyperscript'
import hyperscript from 'hyperscript'

const { Title } = Typography;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {markdownRemark} = data // data.markdownRemark holds your post data
  const {htmlAst} = markdownRemark
  const title = markdownRemark.frontmatter.title;
  const cards = [];

  htmlAst.children.forEach(child => {

    if (child.tagName === 'h2') {

      const card = {
        title: null,
        code: null,
        className: null,
        html: null,
      };

      card.title = child.children[0].value;

      cards.push(card);
    }

    if (child.tagName === 'div') {
      // const code = child.children[0];
      // const text = code.children[0];
      const card = cards[cards.length - 1];
      // card.className = code.properties.className;
      // card.code = text.value;
      card.code = child;
      card.html = hastToHyperScript(hyperscript, child);
    }
  })

  return (
      <div style={{margin: '2vw 8vw'}}>

        <Breadcrumb>
          <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="./">{title}</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Title>{title}</Title>

        <div className="masonry">
          {
            cards.map(card => {
              return <Card key={card.title}
                           className="masonry-item"
                           title={card.title}>

                <div dangerouslySetInnerHTML={{__html: card.html.outerHTML}}></div>

              </Card>
            })
          }
        </div>


      </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`