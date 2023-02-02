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
      <li><Link to='/mongodb-what-is-mongodb'>PostgreSQL</Link></li>
      <li><Link to='/mongodb-advantages'>advantages</Link></li>
      <li><Link to='/mongodb-documents'>Documents</Link></li>
      <li><Link to='/mongodb-collection'>Collection</Link></li>
      <li><Link to='/mongodb-shell'>Shell</Link></li>
      <li><Link to='/mongodb-features'>Features</Link></li>
    </ul>
    </LeftContainer>
    </>
  )
}

export default ReadMoreLeft
