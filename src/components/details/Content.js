import React from 'react'
import {
  Container,
  Details,
  DetailsTitle,
  DetailsDescription
} from './Content.styled'
const Content = () => {
  return (
   <>
   <Container>
    <Details>
      <DetailsTitle>
        What is Hooks?
      </DetailsTitle>

      <DetailsDescription>
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. 
      </DetailsDescription>
      
      
    </Details>

   </Container>
    
   </>
  )
}

export default Content