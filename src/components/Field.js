import debounce from 'lodash.debounce'
import React, { Component, PropTypes } from 'react'

import './Field.css'

class Field extends Component {
  constructor (props) {
    super(props)

    this.handleInputBlur = this.handleValueChange.bind(this)
    this.handleValueChange = debounce(this.handleValueChange.bind(this), 500)
  }

  handleValueChange () {
    const { name, onChange } = this.props
    if (onChange) {
      onChange(name, this.input.value)
    }
  }

  render () {
    const { label } = this.props
    return (
      <fieldset className='Field'>
        <label className='Field-label'>{label}</label>
        <input className='Field-input' type='text' onBlur={this.handleInputBlur} onChange={this.handleValueChange} ref={(input) => { this.input = input }} />
      </fieldset>
    )
  }
}

Field.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}

export default Field
