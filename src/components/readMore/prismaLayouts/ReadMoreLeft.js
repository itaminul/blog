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
      <li><Link to='/prisma-what-is-prisma'>Prisma</Link></li>
      <li><Link to='/prisma-cli'>Prisma CLI</Link></li>
      <li><Link to='/prisma-client'>Prisma Client</Link></li>
      <li><Link to='/prisma-migrations'>Migrations</Link></li>
    </ul>
    </LeftContainer>
    </>
  )
}

export default ReadMoreLeft
