import * as React from "react"
import { Input, AutoComplete, Row, Col, Divider } from 'antd';
import {Component} from "react";

// styles
const pageStyles = {
  color: "#232129",
  paddingTop: "100px",
  paddingLeft: "400px",
  paddingRight: "400px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}


const options = [
  {
    value: 'rsync',
  },
  {
    value: 'macOS Terminal',
  },
  {
    value: 'vi',
  },
];

class IndexPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    }
  }

  onSearchChange(keyword) {
    this.setState({ keyword})
  }

  render() {
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
                  option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              onChange={(keyword) => this.onSearchChange(keyword)}
          >
            <Input.Search size="large" placeholder="搜索 ..." enterButton />
          </AutoComplete>

          <div style={{height: '20px'}}/>


          <Row gutter={16}>
            {
              options
              .filter( option => {
                return option.value.includes(this.state.keyword || '');
              })
              .map( option => {
                return <Col id={option.value} className="gutter-row" span={12}>
                  <div>{option.value}</div>
                </Col>
              })
            }
          </Row>
        </main>
    )

  }
}

export default IndexPage
