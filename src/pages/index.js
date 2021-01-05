import * as React from "react"
import {Input, AutoComplete, Row, Col, Typography} from 'antd';
import {Component} from "react";
import {graphql, Link} from "gatsby";

const {Title} = Typography;

// styles
const pageStyles = {
  color: "#232129",
  width: '80vw',
  paddingTop: "100px",
  margin: "0 auto",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

class IndexPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    }
  }

  onSearchChange(keyword) {
    this.setState({keyword})
  }

  render() {

    const {data} = this.props;

    const options = data.allMarkdownRemark.edges.map(edge => {
      return {
        value: edge.node.frontmatter.title,
      }
    })

    return (
        <main style={pageStyles}>
          <title>CheatSheets</title>
          <h1 style={headingStyles}>
            CheatSheets
            <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
          </h1>

          <AutoComplete
              style={{
                width: '100%',
                margin: '0 auto',
              }}
              options={options}
              filterOption={(inputValue, option) =>
                  option.value.toUpperCase().indexOf(inputValue.toUpperCase())
                  !== -1
              }
              onChange={(keyword) => this.onSearchChange(keyword)}
          >
            <Input.Search size="large" placeholder="搜索 ..." enterButton/>
          </AutoComplete>

          <div style={{height: '20px'}}/>


          <Row gutter={16}>
            {
              data.allMarkdownRemark.edges
              .map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  description: edge.node.frontmatter.description,
                  url: edge.node.fields.slug
                }
              })
              .filter(option => {
                return option.title.includes(this.state.keyword || '');
              })
              .map(option => {
                return <Col key={option.title} className="gutter-row" span={24}>
                  <Link to={option.url}
                        style={{
                          textDecoration: 'none',
                          color: 'inherit'
                        }}
                  >
                    <Title
                        level={5}>{option.title}{option.description ? ` - ${option.description}` : ''}</Title></Link>
                </Col>
              })
            }
          </Row>
        </main>
    )

  }
}

export default IndexPage

// language=graphql
export const pageQuery = graphql`
  query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          description
        }
        fields {
          slug
        }
      }
    }
  }
}
`