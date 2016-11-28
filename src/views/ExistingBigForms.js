import React from 'react'
import { Link } from 'react-router'

import records from '../store/bigforms.js'

import './ExistingBigForms.css'

const ExistingBigForms = () => (
  <div className='ExistingBigForms'>
    <h1>ExistingBigForms</h1>

    <ul>
      { Array.from(records.entries()).map(([ id, record ]) => (
        <li key={id}><Link to={`/existingbigforms/${id}`}>{id}</Link></li>
      )) }
    </ul>
  </div>
)

export default ExistingBigForms
