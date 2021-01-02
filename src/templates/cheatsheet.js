import React from "react"
import {Row, Col, Typography, Breadcrumb, List} from 'antd';
import {graphql} from "gatsby"
import hastToHyperScript from 'hast-to-hyperscript'
import hyperscript from 'hyperscript'
import hastTableToJavaScriptTable from "../js/hast-table-to-javascript-table";
import { stringify } from "../js/hast-table-to-javascript-table";

const { Title, Text } = Typography;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {markdownRemark} = data // data.markdownRemark holds your post data
  const {htmlAst} = markdownRemark
  const title = markdownRemark.frontmatter.title;
  const cards = [];

  htmlAst.children.forEach(child => {

    if (child.tagName === 'h3') {

      const card = {
        title: null,
        rows: [],
      };

      card.title = child.children[0].value;

      cards.push(card);
    }

    const card = cards[cards.length - 1];

    if (child.tagName === 'div') {
      card.code = child;
      card.rows.push({
        type: 'html',
        data: hastToHyperScript(hyperscript, child)
      });
    }

    if (child.tagName === 'table') {
      const table = hastTableToJavaScriptTable(child);

      table.rows.forEach((row) => {
        card.rows.push({
          type: 'two-column',
          data: row
        })
      })
    }

    if (child.tagName === 'p') {
      card.rows.push({
        type: 'text',
        data: stringify(child)
      })
    }
  });

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
              return <List
                  className="masonry-item"
                  key={card.title}
                  size="small"
                  header={<Text strong>{card.title}</Text>}
                  bordered
                  dataSource={card.rows}
                  renderItem={row => (
                      <List.Item>
                        {
                          row.type === 'html'
                              ? <div dangerouslySetInnerHTML={{__html: row.data.outerHTML}}></div>
                              : null
                        }

                        {
                          row.type === 'two-column'
                              ? <Row style={{width: '100%'}}>
                                <Col span={12}><Text>{row.data[0]}</Text></Col>
                                <Col span={12} style={{textAlign: 'right'}}><Text type="secondary">{row.data[1]}</Text></Col>
                              </Row>
                              : null
                        }

                        {
                          row.type === 'text'
                              ? <div>{row.data}</div>
                              : null
                        }

                      </List.Item>
                  )}
              />
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