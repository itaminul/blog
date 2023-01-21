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
      <li><Link to='/express-js-http-methods'>HTTP methods</Link></li>
      <li><Link to='/express-js-uses'>use Express.js</Link></li>
      <li><Link to='/express-js-route-handler'>Route Handler</Link></li>
      <li><Link to='/express-js-cors'>CORS</Link></li>
      <li><Link to='/express-js-error-handler'>Error Handling</Link></li>
      <li><Link to='/express-js-middleware'>Middleware</Link></li>
    </ul>
    </LeftContainer>
    </>
  )
}

export default ReadMoreLeft
