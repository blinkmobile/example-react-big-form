import React from 'react'
import { Link } from 'react-router'

import records from '../store/records.js'

import './ExistingRecords.css'

const ExistingRecords = () => (
  <div className='ExistingRecords'>
    <h1>ExistingRecords</h1>

    <ul>
      { Array.from(records.entries()).map(([ id, record ]) => (
        <li key={id}><Link to={`/existingrecords/${id}`}>{id}</Link></li>
      )) }
    </ul>
  </div>
)

export default ExistingRecords
