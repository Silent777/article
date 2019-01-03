import React, { Component } from 'react';
import styled from 'styled-components'
import { Link as StylessLink } from 'react-router-dom'

const Link = styled(StylessLink)`
  color: red;
  display: flex;
`


const Articles = [
  { title: 'Hello world', id: 1 },
  { title: 'Hello world 12', id: 3 },
  { title: 'Hello world 123', id: 4 },
  { title: 'Hello world 123 ', id: 7 },
]

class ArticleList extends Component {
  render() {
    return (
      <div>
        {Articles.map(article => {
          return <Link key={article.id} to={`/article/${article.id}`} >About</Link>
        })}
      </div>
    );
  }
}

export default ArticleList;
