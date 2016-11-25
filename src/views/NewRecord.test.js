/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'

import NewRecord from './NewRecord.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewRecord />, div)
})
