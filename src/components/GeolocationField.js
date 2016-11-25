import React, { Component, PropTypes } from 'react'

import './GeolocationField.css'

class GeolocationField extends Component {
  constructor (props) {
    super(props)

    this.handleLocateClick = this.handleLocateClick.bind(this)

    this.state = {
      coords: null
    }
  }

  handleLocateClick () {
    window.navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      this.setState({
        coords: { latitude, longitude }
      })
    }, (err) => console.log(err), {
      enableHighAccuracy: true,
      timeout: 5e3,
      maximumAge: 30 * 1e3
    })
  }

  render () {
    const { label } = this.props
    const value = this.state.coords ? JSON.stringify(this.state.coords) : ''
    return (
      <fieldset className='GeolocationField'>
        <label className='GeolocationField-label'>{label}</label>
        <input className='GeolocationField-input' type='text' readOnly value={value} />
        <button onClick={this.handleLocateClick}>Locate</button>
      </fieldset>
    )
  }
}

GeolocationField.propTypes = {
  label: PropTypes.string
}

export default GeolocationField
