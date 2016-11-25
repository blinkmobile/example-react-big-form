/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'

import SelectField from './SelectField.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SelectField />, div)
})
