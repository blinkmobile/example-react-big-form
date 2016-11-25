import React from 'react'
import { Link } from 'react-router'

import './Home.css'

const Home = () => (
  <div className='Home'>
    <ul>
      <li><Link to='/newrecord'>New Record</Link></li>
      <li>Existing Records</li>
    </ul>
  </div>
)

export default Home
