import React, { Component, PropTypes } from 'react'

import Form from '../components/Form.js'
import { checkValidity } from '../forms/bigform.js'
import records from '../store/bigforms.js'

import './EditBigForm.css'

class EditBigForm extends Component {
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
    const errors = checkValidity(this.state.form)
    if (Object.keys(errors).length) {
      return
    }

    const { id } = this.props.params || {}
    if (id) {
      records.set(id, this.state.form)
      this.props.router.push('/home')
    }
  }

  render () {
    return (
      <div className='EditBigForm'>
        <h1>EditBigForm</h1>
        <Form onChange={this.handleFormChange} value={this.state.form} checkValidity={checkValidity} />
        <button className='EditBigForm-submit' onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

EditBigForm.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string
  }),
  router: PropTypes.object
}

export default EditBigForm
