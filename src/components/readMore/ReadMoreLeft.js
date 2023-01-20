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
      <li><Link to='/what-is-javascript'>Javascript</Link></li>
      <li><Link to='/javascript-script-data-types'>Data Types</Link></li>
      <li><Link to='/javascript-arrow-function'>Arrow Function</Link></li>
      <li><Link to='/javascript-async'>Async</Link></li>
      <li><Link to='/javascript-await'>Await</Link></li>
      <li><Link to='/javascript-block-scope'>Block Scope</Link></li>
      <li><Link to='/javascript-call-stack'>Event Loop</Link></li>
      <li><Link to='/javascript-default-parameter'>Default Parameter</Link></li>
      <li><Link to='/javascript-event-loop'>Event Loop</Link></li>
      <li><Link to='/javascript-event-queue'>Event Queue</Link></li>
      <li><Link to='/javascript-lexical-scope'>Lexical Scope</Link></li>
      <li><Link to='/javascript-proto-type'>Proto Type</Link></li>
      <li><Link to='/javascript-promise'>Promise</Link></li>
    </ul>
    </LeftContainer>
    </>
  )
}

export default ReadMoreLeft
