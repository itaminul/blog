import React from 'react'
import { Container, BoxLeft, BoxRight, TopBackground,
  Title,
  SubTitle,
  TitleSummary
 } from './Container.styled'
function ScrollToTop () {
  return (
    <div>
      <Container>
        <TopBackground/>
        <BoxLeft>
        <img src="/pro.webp" alt="image"
        />
        </BoxLeft>
        <BoxRight>
          <Title>Aminul Huq</Title>
          <SubTitle>
                Senior Web Developer in ATI Limited, Uttar, Dhaka since November 15, 2014
                </SubTitle>
             <TitleSummary>
             Since 2011, Emily has been working in UI/UX, mobile, and product design leading projects for clients including Samsung, YETI, Toronto Star, Thomson Reuters, SmartThings, Pizza Hut, a blockchain company, and more. Emily also has experience in project management and leading design teams and she enjoys working closely with engineers to deliver intuitive user experiences. All in all, Emily is a collaborative team member and a positive thinker.
             </TitleSummary>

        </BoxRight>
      </Container>

      
      </div>
  )
}

export default ScrollToTop;
