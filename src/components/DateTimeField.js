import debounce from 'lodash.debounce'
import React, { PropTypes, PureComponent } from 'react'

import Field from './Field.js'

import './DateTimeField.css'

const toISOString = (date) => date.toISOString().replace('Z', '')

class DateTimeField extends PureComponent {
  constructor (props) {
    super(props)

    this.handleNowClick = this.handleNowClick.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.notifyOnChange = debounce(this.notifyOnChangeNow.bind(this), 500)

    this.state = {
      value: this.props.value || ''
    }
  }

  componentWillReceiveProps ({ value = '' }) {
    this.setState({ value })
  }

  handleNowClick () {
    this.setState({ value: toISOString(new Date()) }, () => {
      this.notifyOnChangeNow()
    })
  }

  handleValueChange (event) {
    this.setState({ value: toISOString(new Date(event.target.value)) }, () => {
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
    const { errors, label, required } = this.props
    const { value } = this.state
    return (
      <Field errors={errors} label={label} required={required}>
        <input className='DateTimeField-input' type='datetime-local' onBlur={this.notifyOnChangeNow} onChange={this.handleValueChange} value={value} />
        <button onClick={this.handleNowClick}>Now</button>
      </Field>
    )
  }
}

DateTimeField.propTypes = {
  errors: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default DateTimeField
