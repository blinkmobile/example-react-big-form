import React from 'react'
import { Link } from 'react-router'

import './Home.css'

const Home = () => (
  <div className='Home'>
    <ul>
      <li><Link to='/newrecord'>New Record</Link></li>
      <li><Link to='/existingrecords'>Existing Records</Link></li>
    </ul>
  </div>
)

export default Home
