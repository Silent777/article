import React, { Component } from 'react';
import { StyledFont } from './common'

class Article extends Component {
  state = {
    article: [{
      title: '',
      description: ''
    }],
    id: null
  }

  componentDidMount () {
    const { pathname } = this.props.history.location
    const id = pathname.split('/')[2]

    const articles = JSON.parse(window.localStorage.getItem('articles'))
    const article = articles && articles.filter(article => article.id === id)[0]

    if (articles) this.setState({ article })
  }

  render() {
    const { article } = this.state

    return (
      <div style={{marginTop: '30px'}}>
        <StyledFont>{article.title}</StyledFont>
        <div style={{marginTop: '30px'}}>{article.description}</div>
      </div>
    );
  }
}

export default Article;
