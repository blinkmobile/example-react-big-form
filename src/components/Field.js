import debounce from 'lodash.debounce'
import React, { PropTypes, PureComponent } from 'react'

import './Field.css'

class Field extends PureComponent {
  constructor (props) {
    super(props)

    this.handleValueChange = this.handleValueChange.bind(this)
    this.notifyOnChange = debounce(this.notifyOnChangeNow.bind(this), 500)

    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps ({ value }) {
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
      <fieldset className='Field'>
        <label className='Field-label'>{label}</label>
        <input className='Field-input' type='text' onBlur={this.notifyOnChangeNow} onChange={this.handleValueChange} value={value} />
      </fieldset>
    )
  }
}

Field.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default Field
