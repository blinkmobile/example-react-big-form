import Chance from 'chance'
import React, { Component, PropTypes } from 'react'

import Form from '../components/Form.js'
import bigform, { checkValidity } from '../forms/bigform.js'
import records from '../store/bigforms.js'


import './NewBigForm.css'

const chance = new Chance()

class NewBigForm extends Component {
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
      <div className='NewBigForm'>
        <h1>NewBigForm</h1>
        <Form onChange={this.handleFormChange} value={this.state.form} form={bigform} />
        <button className='NewBigForm-submit' onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

NewBigForm.propTypes = {
  router: PropTypes.object
}

export default NewBigForm
