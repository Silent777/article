import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, StyledFont } from './common'

const HeaderContainer = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  @media screen and (max-width: 780px) {
    display: block;
  }
`

const ListItem = styled.div`
  color: #ec6088;
  font-size: 25px;
  border-bottom: 1px solid #d3d3d3;
  padding: 20px 0;
  cursor: pointer;
`

class ArticleList extends Component {
  state = {
    articles: []
  }
  componentDidMount() {
    const articles = JSON.parse(window.localStorage.getItem('articles'))

    if (articles) this.setState({ articles })
  }
  goToCreate = () => {
    const { history } = this.props
    history.push('/create')
  }
  goToArticle = (e) => {
    const { history } = this.props
    const { id } = e.target

    history.push(`/article/${id}`)
  }

  render() {
    const { isCreateMode } = this.props
    const { articles } = this.state
    const viewArticles = isCreateMode ? articles.slice(0, 3) : articles

    return (
      <div>
        {!isCreateMode && (
          <HeaderContainer>
            <StyledFont>Articles</StyledFont>
            <Button enabled={true} onClick={this.goToCreate}>Add New</Button>
          </HeaderContainer>
        )}
        {viewArticles.map(article => {
          return <ListItem key={article.id} id={article.id} onClick={this.goToArticle}> {article.title} </ListItem>
        })}
      </div>
    );
  }
}

export default ArticleList;
