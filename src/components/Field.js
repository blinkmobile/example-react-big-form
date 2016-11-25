import debounce from 'lodash.debounce'
import React, { Component, PropTypes } from 'react'

import './Field.css'

class Field extends Component {
  constructor (props) {
    super(props)

    this.handleValueChange = this.handleValueChange.bind(this)
    this.notifyOnChange = debounce(this.notifyOnChange.bind(this), 500)

    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps ({ value }) {
    this.setState({ value })
  }

  handleValueChange () {
    this.setState({ value: this.input.value }, () => this.notifyOnChange())
  }

  notifyOnChange () {
    const { name, onChange } = this.props
    if (onChange) {
      onChange(name, this.state.value)
    }
  }

  render () {
    const { label } = this.props
    const { value } = this.state
    return (
      <fieldset className='Field'>
        <label className='Field-label'>{label}</label>
        <input className='Field-input' type='text' onBlur={this.notifyOnChange} onChange={this.handleValueChange} ref={(input) => { this.input = input }} value={value} />
      </fieldset>
    )
  }
}

Field.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default Field
