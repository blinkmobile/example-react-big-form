/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'

import GeoLocationField from './GeoLocationField.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GeoLocationField />, div)
})
