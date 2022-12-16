import React from 'react'
import { ThemeProvider } from 'styled-components'
import TopBar from '../../layouts/TopBar'
import {    
    ContentBox,
    Content1,
    Content2,
    Heading,
    SubHeading,
    TitleSummary,
    ExperienceButtonTitle,
    ExperienceButtonSection,
    Content3,
    Content4,
    Container2
    
} from '../Profile.styled'

import { Container } from '../prtfollewfile/Container.styled'
import Globals from '../../../styles/GlobalStyles'
import { Flex } from '../../../styles/Flex.styled'
import Card from '../Card'
const theme = {
  colors: {
    header: '#ebfbff',
    body: 'black',
    footer: '#003333'
  },
  mobile: '768px',
}

const item = [
  {
    id: '1',
    item: 'aa'
  }
]

const Summary1 = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Globals />
      <nav>
       <TopBar />
      </nav>
        <Container>
      {/* <ContentBox>
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
        
      </ContentBox> */}
      {/* {item.map((itm, index) => (
         <Card key={index} item={itm} />
      ))}     */}
     

      <Flex>
        <div>
          <h1>Build the community your fans will love</h1>
          <p>
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          </p>
        </div>
      </Flex>

      <Flex>
        <div>
          <h1>Build the community your fans will love</h1>
          <p>
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          </p>
        </div>
      </Flex>

      
      <Flex>
        <div>
          <h1>Build the community your fans will love</h1>
          <p>
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          </p>
        </div>
      </Flex>

       
      <Flex>
        <div>
          <h1>Build the community your fans will love</h1>
          <p>
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          </p>
        </div>
      </Flex>

       
      <Flex>
        <div>
          <h1>Build the community your fans will love</h1>
          <p>
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          Build the community your fans will love
          </p>
        </div>
      </Flex>

     
    </Container>  
      
    </div>
    </ThemeProvider>
  )
}

export default Summary1
