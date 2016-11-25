import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import './App.css'

class App extends Component {
  render () {
    const { path } = this.props.route || {}
    const isHome = path !== '/' && path !== '/home'
    return (
      <div className='App'>
        { !isHome && (
          <nav>
            <ul className='App-nav'>
              <li className='App-nav-item'>
                <Link to='/home'>Home</Link>
              </li>
            </ul>
          </nav>
        ) }
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
