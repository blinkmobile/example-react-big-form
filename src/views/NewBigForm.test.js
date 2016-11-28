/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'

import NewBigForm from './NewBigForm.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewBigForm />, div)
})
