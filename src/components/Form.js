import React, { Component } from 'react'

import Field from './Field.js'

import './Form.css'

class Form extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form className='Form' onSubmit={this.handleSubmit}>
        <h2>Form</h2>

        { (new Array(100)).fill(null).map((unused, index) => (
          <Field key={index} label={`Field ${index}`} />
        )) }

        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default Form
