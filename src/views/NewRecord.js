import Chance from 'chance'
import React, { Component, PropTypes } from 'react'

import Form from '../components/Form.js'
import { checkValidity } from '../forms/record.js'
import records from '../store/records.js'


import './NewRecord.css'

const chance = new Chance()

class NewRecord extends Component {
  constructor (props) {
    super(props)

    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      form: props.value || {}
    }
  }

  handleFormChange (record) {
    this.setState({ form: record })
  }

  handleSubmit () {
    const errors = checkValidity(this.state.form)
    if (Object.keys(errors).length) {
      return
    }

    const guid = chance.guid()
    records.set(guid, this.state.form)
    this.props.router.push('/home')
  }

  render () {
    return (
      <div className='NewRecord'>
        <h1>NewRecord</h1>
        <Form onChange={this.handleFormChange} value={this.state.form} checkValidity={checkValidity} />
        <button className='NewRecord-submit' onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

NewRecord.propTypes = {
  router: PropTypes.object
}

export default NewRecord
