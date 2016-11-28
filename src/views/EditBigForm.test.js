/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'

import EditBigForm from './EditBigForm.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<EditBigForm />, div)
})
