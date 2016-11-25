import debounce from 'lodash.debounce'
import React, { PropTypes, PureComponent } from 'react'

import './DateTimeField.css'

const toISOString = (date) => date.toISOString().replace('Z', '')

class DateTimeField extends PureComponent {
  constructor (props) {
    super(props)

    this.handleNowClick = this.handleNowClick.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.notifyOnChange = debounce(this.notifyOnChangeNow.bind(this), 500)

    this.state = {
      value: this.props.value
    }
  }

  componentWillReceiveProps ({ value }) {
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
    const { label } = this.props
    const { value } = this.state
    return (
      <fieldset className='DateTimeField'>
        <label className='DateTimeField-label'>{label}</label>
        <input className='DateTimeField-input' type='datetime-local' onBlur={this.notifyOnChangeNow} onChange={this.handleValueChange} value={value} />
        <button onClick={this.handleNowClick}>Now</button>
      </fieldset>
    )
  }
}

DateTimeField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default DateTimeField
