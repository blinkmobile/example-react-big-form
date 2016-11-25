import React, { Component, PropTypes } from 'react'

import DateTimeField from './DateTimeField.js'
import Field from './Field.js'
import GeolocationField from './GeolocationField.js'
import SelectField from './SelectField.js'

import './Form.css'

class Form extends Component {
  constructor (props) {
    super(props)

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFieldChange (name, value) {
    const { onChange, value: record } = this.props
    if (onChange) {
      onChange(Object.assign({}, record, { [name]: value }))
    }
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form className='Form' onSubmit={this.handleSubmit}>
        <h2 className='Form-heading'>Form</h2>

        { (new Array(200)).fill(null).map((unused, index) => {
          const name = `field${index}`
          if (index % 10 === 0) {
            return <DateTimeField key={index} label={`Field ${index}`} name={name} />
          }
          if (index % 10 === 3) {
            return <SelectField key={index} label={`Field ${index}`} name={name} />
          }
          if (index % 10 === 5) {
            return <GeolocationField key={index} label={`Field ${index}`} name={name} />
          }
          return <Field key={index} label={`Field ${index}`} name={name} onChange={this.handleFieldChange} />
        }) }
      </form>
    )
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.object
}

export default Form
