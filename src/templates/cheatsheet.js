import React from "react"
import {Row, Col, Typography, Breadcrumb, List} from 'antd';
import {graphql} from "gatsby"
import hastToHyperScript from 'hast-to-hyperscript'
import hyperscript from 'hyperscript'
import hastTableToJavaScriptTable from "../js/hast-table-to-javascript-table";
import { Helmet } from "react-helmet"
import Masonry from 'react-masonry-css'
import marked from 'marked'
import {toHtml} from 'hast-util-to-html'

const { Title, Text } = Typography;

const breakpointColumnsObj = {
  default: 3,
  2200: 2,
  1100: 1
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {markdownRemark} = data // data.markdownRemark holds your post data
  const {htmlAst} = markdownRemark
  const {title, description} = markdownRemark.frontmatter;
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
      debugger;
      card.rows.push({
        type: 'single-line-html',
        data: toHtml(child)
      })
    }
  });

  let markedDescription;
  if(description !== null && description !== undefined) {
    markedDescription = marked(description);
  } else {
    markedDescription = null;
  }


  return (
      <div style={{margin: '2vw 8vw'}}>

        <Helmet>
          <meta charSet="utf-8" />
          {
            description === null && <meta name="description" content={description} />
          }
          <meta name="keywords" content={`${title} Cheatsheet, ${title} 常用命令, ${title} 速查手册, ${title} 例子`} />
          <title>{title} 速查手册</title>
          <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
        </Helmet>

        <Breadcrumb>
          <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="./">{title}</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Title>{title}</Title>

        { markedDescription !== null && <Text type="secondary"><div type="secondary" dangerouslySetInnerHTML={{ __html: markedDescription}}/></Text> }

        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column">
          {
            cards.map(card => {
              return <List
                  key={card.title}
                  size="small"
                  header={<Text strong>{card.title}</Text>}
                  bordered
                  dataSource={card.rows}
                  renderItem={row => (
                      <List.Item>
                        {
                          row.type === 'html'
                              ? <div style={{width: '100%', overflow: 'hidden'}} dangerouslySetInnerHTML={{__html: row.data.outerHTML}}></div>
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

                        {
                          row.type === 'single-line-html'
                              ? <div dangerouslySetInnerHTML={{ __html: row.data}}/>
                              : null
                        }

                      </List.Item>
                  )}
              />
            })
          }

        </Masonry>


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
        description
      }
    }
  }
`