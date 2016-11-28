import React, { PropTypes, PureComponent } from 'react'

import './Field.css'

class Field extends PureComponent {
  render () {
    const { children, label } = this.props
    return (
      <fieldset className='Field'>
        <label className='Field-label'>{label}</label>
        {children}
      </fieldset>
    )
  }
}

Field.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string
}

export default Field
