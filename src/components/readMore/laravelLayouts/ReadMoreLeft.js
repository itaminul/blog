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
      <li><Link to='/laravel-what-is-laravel'>Laravel</Link></li>
    </ul>
    </LeftContainer>
    </>
  )
}

export default ReadMoreLeft
