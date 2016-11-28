import debounce from 'lodash.debounce'
import React, { PropTypes, PureComponent } from 'react'

import Field from './Field.js'

import './TextField.css'

class TextField extends PureComponent {
  constructor (props) {
    super(props)

    this.handleValueChange = this.handleValueChange.bind(this)
    this.notifyOnChange = debounce(this.notifyOnChangeNow.bind(this), 500)
    this.notifyOnChangeNow = this.notifyOnChangeNow.bind(this)

    this.state = {
      value: props.value || ''
    }
  }

  componentWillReceiveProps ({ value = '' }) {
    this.setState({ value })
  }

  handleValueChange (event) {
    this.setState({ value: event.target.value }, () => {
      this.notifyOnChange()
    })
  }

  notifyOnChangeNow () {
    const { name, onChange } = this.props
    if (onChange) {
      onChange(name, this.state.value)
    }
  }

  render () {
    const { label } = this.props
    const { value } = this.state
    return (
      <Field label={label}>
        <input className='TextField-input' type='text' onBlur={this.notifyOnChangeNow} onChange={this.handleValueChange} value={value} />
      </Field>
    )
  }
}

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default TextField
