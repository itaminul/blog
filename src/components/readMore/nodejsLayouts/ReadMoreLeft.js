import React from 'react'
import { Link } from 'react-router-dom'

import {
  LeftContainer
} from './ReadMoreLeft.styled'

const ReadMoreLeft = () => {
  return (
    <>
     Recent Post
    <LeftContainer>  
    <ul>
      <li><Link to='/node-js-blocking'>Blocking</Link></li>
      <li><Link to='/node-js-none-blocking'>Nonblocking</Link></li>
    </ul>
    </LeftContainer>
    </>
  )
}

export default ReadMoreLeft
