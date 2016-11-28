/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'

import Form from './Form.js'

const fakeForm = {
  checkValidity: () => ({}),
  schema: { properties: {} }
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Form form={fakeForm} />, div)
})
