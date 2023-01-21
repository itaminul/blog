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
      <li><Link to='/react-dom'>DOM</Link></li>
      <li><Link to='/react-fragment'>Fragments</Link></li>
      <li><Link to='/react-state'>State</Link></li>
      <li><Link to='/react-use-callback'>useCallback</Link></li>
      <li><Link to='/react-use-state'>useState</Link></li>
      <li><Link to='/react-use-memo'>useMemo</Link></li>
      <li><Link to='/react-use-ref'>useRef</Link></li>
    </ul>
    </LeftContainer>
    </>
  )
}

export default ReadMoreLeft
