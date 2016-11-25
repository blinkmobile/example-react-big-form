import React, { Component } from 'react'

import DateTimeField from './DateTimeField.js'
import Field from './Field.js'
import GeolocationField from './GeolocationField.js'
import SelectField from './SelectField.js'

import './Form.css'

class Form extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form className='Form' onSubmit={this.handleSubmit}>
        <h2 className='Form-heading'>Form</h2>

        { (new Array(200)).fill(null).map((unused, index) => {
          if (index % 10 === 0) {
            return <DateTimeField key={index} label={`Field ${index}`} />
          }
          if (index % 10 === 3) {
            return <SelectField key={index} label={`Field ${index}`} />
          }
          if (index % 10 === 5) {
            return <GeolocationField key={index} label={`Field ${index}`} />
          }
          return <Field key={index} label={`Field ${index}`} />
        }) }

        <input className='Form-submit' type='submit' value='Submit' />
      </form>
    )
  }
}

export default Form
