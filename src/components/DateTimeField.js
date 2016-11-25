import React, { Component, PropTypes } from 'react'

import './DateTimeField.css'

class DateTimeField extends Component {
  constructor (props) {
    super(props)

    this.handleNowClick = this.handleNowClick.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)

    this.state = {
      date: null
    }
  }

  handleNowClick () {
    this.setState({ date: Date.now() })
  }

  handleValueChange () {
    this.setState({ date: this.input.valueAsNumber })
  }

  render () {
    const { label } = this.props
    const { date } = this.state
    // TODO: properly handle non-UTC timezones
    const isoString = date && (new Date(date)).toISOString().replace('Z', '')
    const value = isoString || ''
    return (
      <fieldset className='DateTimeField'>
        <label className='DateTimeField-label'>{label}</label>
        <input className='DateTimeField-input' type='datetime-local' ref={(input) => { this.input = input }} onChange={this.handleValueChange} value={value} />
        <button onClick={this.handleNowClick}>Now</button>
      </fieldset>
    )
  }
}

DateTimeField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

export default DateTimeField
