/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'

import EditRecord from './EditRecord.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<EditRecord />, div)
})
