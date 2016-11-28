import React, { Component, PropTypes } from 'react'

import Field from './Field.js'

import './GeolocationField.css'

class GeolocationField extends Component {
  constructor (props) {
    super(props)

    this.handleLocateClick = this.handleLocateClick.bind(this)

    this.state = {
      value: this.props.value || null
    }
  }

  componentWillReceiveProps ({ value }) {
    this.setState({ value })
  }

  handleLocateClick () {
    window.navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      this.setState({
        value: { latitude, longitude }
      }, () => this.notifyOnChange())
    }, (err) => console.log(err), {
      enableHighAccuracy: true,
      timeout: 5e3,
      maximumAge: 30 * 1e3
    })
  }

  notifyOnChange () {
    const { name, onChange } = this.props
    if (onChange) {
      onChange(name, this.state.value)
    }
  }

  render () {
    const { errors, label, required } = this.props
    const { value } = this.state
    const { latitude, longitude } = value || {}
    const displayValue = (latitude || longitude) ? JSON.stringify(value) : ''
    return (
      <Field errors={errors} label={label} required={required}>
        <input className='GeolocationField-input' type='text' readOnly value={displayValue} />
        <button onClick={this.handleLocateClick}>Locate</button>
      </Field>
    )
  }
}

GeolocationField.propTypes = {
  errors: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number
  })
}

export default GeolocationField
