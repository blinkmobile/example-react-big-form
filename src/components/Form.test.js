/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'

import Form from './Form.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Form />, div)
})
