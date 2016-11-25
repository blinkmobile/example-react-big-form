/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'

import ExistingRecords from './ExistingRecords.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ExistingRecords />, div)
})
