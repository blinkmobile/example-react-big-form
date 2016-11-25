/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'

import Field from './Field.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Field />, div)
})
