import React, { PropTypes } from 'react'

import './Field.css'

const Field = ({ label }) => (
  <fieldset className='Field'>
    <label className='Field-label'>{label}</label>
    <input className='Field-input' type='text' />
  </fieldset>
)

Field.propTypes = {
  label: PropTypes.string
}

export default Field
