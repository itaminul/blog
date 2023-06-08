import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Details,
  DetailsTitle,
  DetailsDescription,
} from './ReadMoreContent.styled'
const ReadMoreContent = () => {

  const clickHandler = () => {
    console.log('Clicked me')
  }
  return (
    <>
   <Container>
    <Details>
      <DetailsTitle>
        What is Hooks s?
      </DetailsTitle>
      <DetailsDescription>      
      <button onClick={clickHandler}>Change Title</button>
      </DetailsDescription>
      
    </Details>  
   </Container>    
   </>
  )
}

export default ReadMoreContent
