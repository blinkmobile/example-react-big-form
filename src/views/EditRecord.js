import React, { Component, PropTypes } from 'react'

import Form from '../components/Form.js'
import records from '../store/records.js'

import './EditRecord.css'

class EditRecord extends Component {
  constructor (props) {
    super(props)

    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    const { id } = this.props.params || {}
    this.state = {
      form: records.get(id) || {}
    }
  }

  handleFormChange (record) {
    this.setState({ form: record })
  }

  handleSubmit () {
    const { id } = this.props.params || {}
    if (id) {
      records.set(id, this.state.form)
      this.props.router.push('/home')
    }
  }

  render () {
    return (
      <div className='EditRecord'>
        <h1>EditRecord</h1>
        <Form onChange={this.handleFormChange} value={this.state.form} />
        <button className='EditRecord-submit' onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

EditRecord.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string
  }),
  router: PropTypes.object
}

export default EditRecord
