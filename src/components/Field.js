import React, { PropTypes, PureComponent } from 'react'

import './Field.css'

class Field extends PureComponent {
  render () {
    const { children, errors, label, required } = this.props
    return (
      <fieldset className='Field'>
        <label className='Field-label'>
          {label}
          {required && '*'}
        </label>
        {children}
        { errors && <ul className='Field-errors'>
          { errors.map((error, index) => (
            <li key={index}>{error}</li>
          )) }
        </ul> }
      </fieldset>
    )
  }
}

Field.propTypes = {
  children: PropTypes.node,
  errors: PropTypes.array,
  label: PropTypes.string,
  required: PropTypes.bool
}

export default Field
