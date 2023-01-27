import React from 'react'
import { Link } from 'react-router-dom'

import {
    RightContainer
} from './RecentBlog.styled'
const  RecentBlog = () => {
  return (
    <>
    Recent Post
    <RightContainer>
    <ul>
      <Link to='/recent-post-promise'> <li> What is promise ? </li> </Link>
      <Link to='/recent-post-react'> <li> What is react ? </li> </Link>
      <Link to='/recent-post-use-memo'> <li> What is useMemo ? </li> </Link>
      <Link to='/recent-post-use-effect'> <li> What is useEffect ? </li> </Link>
      <Link to='/recent-post-hooks'> <li> What is hooks ? </li> </Link>
      <Link to='/recent-post-arrow-function'> <li> What is arrow function? </li> </Link>
    </ul>
    </RightContainer>
    </>
  )
}

export default RecentBlog