import React from 'react'
import ReactDOM from 'react-dom'
import { IndexRedirect, Router, Route, hashHistory } from 'react-router'

import App from './App.js'
import ExistingRecords from './views/ExistingRecords.js'
import Home from './views/Home.js'
import NewRecord from './views/NewRecord.js'

import './index.css'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='/home' />
      <Route path='home' component={Home} />
      <Route path='newrecord' component={NewRecord} />
      <Route path='existingrecords' component={ExistingRecords} />
    </Route>
  </Router>,
  document.getElementById('root')
)
