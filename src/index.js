import React from 'react'
import ReactDOM from 'react-dom'
import { IndexRedirect, Router, Route, hashHistory } from 'react-router'

import App from './App.js'
import EditBigForm from './views/EditBigForm.js'
import ExistingBigForms from './views/ExistingBigForms.js'
import Home from './views/Home.js'
import NewBigForm from './views/NewBigForm.js'

import './index.css'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='/home' />
      <Route path='home' component={Home} />
      <Route path='newbigform' component={NewBigForm} />
      <Route path='existingbigforms' component={ExistingBigForms} />
      <Route path='existingbigforms/:id' component={EditBigForm} />
    </Route>
  </Router>,
  document.getElementById('root')
)
