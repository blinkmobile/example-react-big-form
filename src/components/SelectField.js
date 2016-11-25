import React, { PropTypes } from 'react'

import './SelectField.css'

const SelectField = ({ label }) => (
  <fieldset className='SelectField'>
    <label className='SelectField-label'>{label}</label>
    <select className='SelectField-input'>
      { (new Array(100)).fill(null).map((unused, index) => (
        <option key={index} value={index}>{index}</option>
      )) }
    </select>
  </fieldset>
)

SelectField.propTypes = {
  label: PropTypes.string
}

export default SelectField
