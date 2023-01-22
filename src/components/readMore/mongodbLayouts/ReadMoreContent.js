import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Details,
  DetailsTitle,
  DetailsDescription,
} from './ReadMoreContent.styled'
const ReadMoreContent = () => {
  return (
    <>
   <Container>
    <Details>
      <DetailsTitle>
        What is Hooks?
      </DetailsTitle>
      <DetailsDescription>
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes....<Link to="/hooks">Details</Link>
      </DetailsDescription>
    </Details>

     </Container>    
   </>
  )
}

export default ReadMoreContent
