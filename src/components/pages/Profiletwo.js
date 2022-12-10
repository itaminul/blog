import React from 'react'
import styled from "styled-components";
import {
     Container,
    ContentBox,
    Content1,
    Content2,
    Heading,
    SubHeading,
    TitleSummary,
    ExperienceButtonTitle,
    ExperienceButtonSection
 } from './Profile.styled'
const Profiletwo = () => {
  return (
    <div>
    <Container>
      <ContentBox>
        <Content1>
        <img 
        src="/pro.webp"
         alt="image"
         height="325"
         width="300"
          />
        </Content1>
        <Content2>
        <Heading>Aminul Huq</Heading>
               
        <SubHeading>
        Senior Web Developer in ATI Limited, Uttar, Dhaka since November 15, 2014
            </SubHeading>    
              
        <TitleSummary>
            Since 2011, Emily has been working in UI/UX, mobile, and product design leading projects for clients including Samsung, YETI, Toronto Star, Thomson Reuters, SmartThings, Pizza Hut, a blockchain company, and more. Emily also has experience in project management and leading design teams and she enjoys working closely with engineers to deliver intuitive user experiences. All in all, Emily is a collaborative team member and a positive thinker.
        </TitleSummary>
        <ExperienceButtonSection>
        <ExperienceButtonTitle>
                  JavaScript
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  ReactJs
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  NodeJs
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  Express
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  MySql
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  Oracle
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                MongoDB
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                PostgreSQL
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  Jquery
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  PHP
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  Laravel
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                CodeIgniter
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  API
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  Bootstrap
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  CSS
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  MUI
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  ReduxToolkit
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  Prisma
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  Mongoose
                </ExperienceButtonTitle>
        </ExperienceButtonSection>
        </Content2>
      </ContentBox>
    </Container>      
    </div>
  )
}

export default Profiletwo
