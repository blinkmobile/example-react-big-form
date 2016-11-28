import React, { Component, PropTypes } from 'react'

import DateTimeField from './DateTimeField.js'
import GeolocationField from './GeolocationField.js'
import SelectField from './SelectField.js'
import TextField from './TextField.js'

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
    const { checkValidity, schema } = this.props.form
    const value = this.props.value || {}

    const errors = checkValidity(value)

    return (
      <form className='Form' onSubmit={this.handleSubmit}>
        <h2 className='Form-heading'>Form</h2>

        { Object.keys(schema.properties).map((name, index) => {
          const field = schema.properties[name]
          const isRequired = !!~schema.required.indexOf(name)

          const isHiddenIfPrecedingIsEmpty = field.$bmforms && field.$bmforms.hiddenIfPrecedingIsEmpty
          const isPrecedingEmpty = !value[`field${index - 1}`]

          if (isHiddenIfPrecedingIsEmpty && isPrecedingEmpty) {
            return null
          }

          if (field.type === 'string' && field.format === 'date-time') {
            return <DateTimeField key={index} label={`Field ${index}`} name={name} onChange={this.handleFieldChange} value={value[name]} required={isRequired} errors={errors[name]} />
          }

          if (field.type === 'integer') {
            return <SelectField key={index} label={`Field ${index}`} name={name} onChange={this.handleFieldChange} value={value[name]} required={isRequired} errors={errors[name]} />
          }

          if (field.type === 'object' && field.properties.latitude && field.properties.longitude) {
            return <GeolocationField key={index} label={`Field ${index}`} name={name} onChange={this.handleFieldChange} value={value[name]}  required={isRequired} errors={errors[name]} />
          }

          if (field.type === 'string') {
            return <TextField key={index} label={`Field ${index}`} name={name} onChange={this.handleFieldChange} value={value[name]} required={isRequired} errors={errors[name]} />
          }

          return null
        }) }
      </form>
    )
  }
}

Form.propTypes = {
  form: PropTypes.shape({
    checkValidity: PropTypes.func,
    schema: PropTypes.object
  }),
  onChange: PropTypes.func,
  value: PropTypes.object
}

export default Form
