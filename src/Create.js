import React, { Component } from 'react';
import ArticleList from './ArticleList'
import styled from 'styled-components'
import { Button, StyledFont } from './common'

const InputStyle = `
  width: 100%;
  border-radius: 5px;
  outline: none;
  min-width: 125px;
  border: 1px solid #eee;
  box-shadow: 0 8px 6px -6px #d3d3d3;
  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
  ::placeholder{
    color: #d3d3d3;
    font-size: 20px;
  }
`

const TextArea = styled.textarea`
  ${InputStyle};
  resize: none;
  width: calc(100% - 5px);
  height: 90px;
  margin-bottom: 20px;
  }
`
const Input = styled.input`
  ${InputStyle};
  height: 40px;
  margin: 30px 0;
`
const Container = styled.div`
  margin: 30px 0;
`

class Create extends Component {
  state = {
    title: '',
    description: ''
  }

  Submit = () => {
    const { history } = this.props
    const { title, description } = this.state
    const id = Math.random().toString(36).substr(2, 9)
    const data = JSON.parse(window.localStorage.getItem('articles'))
    const articles = data ? data : []

    window.localStorage.setItem('articles', JSON.stringify([{ title, description, id }, ...articles]));

    history.push(`/articles/`)
  }

  onChange = (event) => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
  const { title, description } = this.state

  const emptyFields = title && description
    return (
      <Container>
        <StyledFont>New Article</StyledFont>
        <Input
          placeholder='Article Title'
          type='text'
          name='title'
          onChange={this.onChange} />
        <TextArea
          placeholder='Article Text'
          name='description'
          rows="4"
          cols="50"
          onChange={this.onChange} />
        <Button enabled={emptyFields} onClick={this.Submit}>Submit</Button>
        <ArticleList {...this.props} isCreateMode={true} />
      </Container>
    );
  }
}

export default Create;
