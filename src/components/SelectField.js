import React, { PropTypes, PureComponent } from 'react'

import Field from './Field.js'

import './SelectField.css'

class SelectField extends PureComponent {
  constructor (props) {
    super(props)

    this.handleValueChange = this.handleValueChange.bind(this)

    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps ({ value }) {
    this.setState({ value })
  }

  handleValueChange (event) {
    this.setState({ value: Number(event.target.value) }, () => {
      this.notifyOnChange()
    })
  }

  notifyOnChange () {
    const { name, onChange } = this.props
    if (onChange) {
      onChange(name, this.state.value)
    }
  }

  render () {
    const { label } = this.props
    const { value } = this.state
    return (
      <Field label={label}>
        <select className='SelectField-input' onChange={this.handleValueChange} value={value}>
          { (new Array(100)).fill(null).map((unused, index) => (
            <option key={index} value={index}>{index}</option>
          )) }
        </select>
      </Field>
    )
  }
}

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.number
}

export default SelectField
