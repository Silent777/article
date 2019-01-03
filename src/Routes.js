import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Create from './Create'
import ArticleList from './ArticleList'
import Article from './Article'
import NotFound from './NotFound'

export const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/articles' exact component={ArticleList} />
        <Route path='/article/:articleId' exact component={Article} />
        <Route path='/create' exact component={Create} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)