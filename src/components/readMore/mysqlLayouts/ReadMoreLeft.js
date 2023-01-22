import React from 'react'
import { Link } from 'react-router-dom'

import {
  LeftContainer
} from './ReadMoreLeft.styled'

const ReadMoreLeft = () => {
  return (
    <>
     {/* Recent Post */}
    <LeftContainer>  

    <ul>
      <li><Link to='/mysql-what-is-mysql'>MySQL</Link></li>
      <li><Link to='/mysql-add-column'>Column Addition</Link></li>
      <li><Link to='/mysql-foreign-key'>Foreign Key</Link></li>
      <li><Link to='/mysql-join-tables'>Join Tables</Link></li>
      <li><Link to='/mysql-char-varchar'>Char and Varchar</Link></li>
      <li><Link to='/mysql-distinct'>Distinct</Link></li>
    </ul>
    </LeftContainer>
    </>
  )
}

export default ReadMoreLeft
