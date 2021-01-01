import React from "react"
import { Card, Row, Col} from 'antd';
import { graphql } from "gatsby"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { htmlAst } = markdownRemark
  const title = markdownRemark.frontmatter.title;
  const cards = [];

  htmlAst.children.forEach(child => {

    if(child.tagName === 'h2') {

      const card = {
        title: null,
        code: null,
        className: null,
      };

      card.title = child.children[0].value;

      cards.push(card);
    }

    if(child.tagName === 'pre') {
      const code = child.children[0];
      const text = code.children[0];
      const card = cards[cards.length - 1];
      card.className = code.properties.className;
      card.code = text.value;
    }
  })

  return (
      <div style={{margin: '2vw 8vw'}}>

        <h1>{title}</h1>

        <Row gutter={16}>
          {
            cards.map(card => {
              return <Col key={card.title} span={12}>
                <Card  title={card.title} style={{ width: '100%' }}>
                  <pre><code className={card.className} >{card.code}</code></pre>
                </Card>
              </Col>
            })
          }
        </Row>


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