import React from 'react'
import { Link } from 'react-router'

import './Home.css'

const Home = () => (
  <div className='Home'>
    <ul>
      <li><Link to='/newbigform'>New Record</Link></li>
      <li><Link to='/existingbigforms'>Existing Records</Link></li>
    </ul>
  </div>
)

export default Home
