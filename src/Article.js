import React, { Component } from 'react';

class Article extends Component {
  render() {
    console.log(window.location.pathname)
    return (
      <div>
        Article
      </div>
    );
  }
}

export default Article;
