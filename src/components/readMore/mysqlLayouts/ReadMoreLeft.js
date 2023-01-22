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
      <li><Link to='/mysql-add-column'>column addition</Link></li>
      <li><Link to='/mysql-foreign-key'>foreign key</Link></li>
      <li><Link to='/mysql-join-tables'>join tables</Link></li>
      <li><Link to='/mysql-char-varchar'>CHAR and VARCHAR</Link></li>
      <li><Link to='/mysql-distinct'>DISTINCT</Link></li>
    </ul>
    </LeftContainer>
    </>
  )
}

export default ReadMoreLeft
