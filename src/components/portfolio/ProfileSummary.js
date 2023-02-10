import React from 'react'
import { Container, BoxLeft, BoxRight, TopBackground,
  Title,
  SubTitle,
  TitleSummary,
  ExpButton,
  ExpSummary
 } from './Container.styled'

function ProfileSummary () {
  return (
    <div>
      <Container>
      
        <TopBackground/>
        <BoxLeft>
        <img 
        style={{width: '370px'}}
        src="/aminul.jpeg" alt="image"
        />
        </BoxLeft>
        <BoxRight>
          <Title>Aminul Huq</Title>
          <SubTitle>
                Senior Web Developer in ATI Limited, Uttara, Dhaka since November 15, 2014.
                </SubTitle>
             <TitleSummary>
             Since 2014, I am has been working in web application, and product design leading projects for clients and more. I am also has experience in team lead and enjoy working closely with all team members. All in all, I am a collaborative team member and a positive thinker.
             </TitleSummary>
             <ExpSummary>
             <ExpButton>API</ExpButton>
             <ExpButton>JavaScript</ExpButton>
             <ExpButton>ReactJs</ExpButton>
             <ExpButton>NodeJs</ExpButton>
             <ExpButton>Express.js</ExpButton>
             <ExpButton>Redux Toolkit</ExpButton>
             <ExpButton>MongoDB</ExpButton>
             <ExpButton>Mongoose</ExpButton>
             <ExpButton>prisma.io</ExpButton>
             <ExpButton>PHP</ExpButton>
             <ExpButton>CodeIgniter</ExpButton>
             <ExpButton>MySQL</ExpButton>
             <ExpButton>Oracle</ExpButton>
             <ExpButton>PostgreSQL</ExpButton>
             <ExpButton>Jquery</ExpButton>
             <ExpButton>Ajax</ExpButton>
             <ExpButton>CSS</ExpButton>
             <ExpButton>Bootstrap</ExpButton>
             <ExpButton>MUI</ExpButton>
             <ExpButton>styled-components</ExpButton>
             </ExpSummary>

        </BoxRight>
        
      </Container>

      
      </div>
  )
}

export default ProfileSummary;
