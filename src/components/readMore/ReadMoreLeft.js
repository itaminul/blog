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
      <li>
        <Link to='/what-is-javascript'>What is Javascript</Link>
        
        </li>
      <li>What is useMemo?</li>
      <li>What is useEffect?</li>
      <li>What is hooks?</li>
      <li>What is hooks?</li>
      <li>What is hooks?</li>
      <li>What is hooks?</li>
      <li>What is hooks?</li>
      <li>What is hooks?</li>
      <li>What is hooks?</li>
      <li>What is hooks?</li>
      <li>What is hooks?</li>
      <li>What is hooks?</li>
      <li>What is hooks?</li>
    </ul>
    </LeftContainer>
    </>
  )
}

export default ReadMoreLeft
