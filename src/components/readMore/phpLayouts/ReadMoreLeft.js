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
      <li><Link to='/php-what-is-php'>PHP</Link></li>
      <li><Link to='/php-types-of-array'>types of array </Link></li>
      <li><Link to='/php-var-dump'>var_dump()</Link></li>
      <li><Link to='/php-print-r'>print_r()</Link></li>
      <li><Link to='/php-pear'>PEAR in PHP</Link></li>
      <li><Link to='/php-get-post'>GET and POST</Link></li>
    </ul>
    </LeftContainer>
    </>
  )
}

export default ReadMoreLeft
