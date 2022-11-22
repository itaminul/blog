import React from 'react'
import SideBar from '../layouts/SideBar'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
//import { useSelector } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { TableCell } from '@mui/material';
import TopBar from '../layouts/TopBar'
import {
  Wrapper,
   ImageContainer,
   SelfSummary, 
   Section,
   Title,
   SubTitle,
   TitleSummary,
   ExperienceButtonSection,
   ExperienceButtonTitle,
   MarginTop,
   HireMe
   } from './Home.styled';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home(){
  // const open = useSelector((state) => state.SideBar.open);
  return (
    <>
  
      <nav>
       <TopBar />
      </nav>
      <main>
        <Wrapper>
          <Section>
          <ImageContainer>
             Photo
          </ImageContainer> 
          <SelfSummary>
             <Title>
                Aminul Huq
                <SubTitle>
                Senior Web Developer in ATI Limited, Uttar, Dhaka since November 15, 2014
                </SubTitle>
             </Title>
             <TitleSummary>
             Since 2011, Emily has been working in UI/UX, mobile, and product design leading projects for clients including Samsung, YETI, Toronto Star, Thomson Reuters, SmartThings, Pizza Hut, a blockchain company, and more. Emily also has experience in project management and leading design teams and she enjoys working closely with engineers to deliver intuitive user experiences. All in all, Emily is a collaborative team member and a positive thinker.
             </TitleSummary>
             <MarginTop />
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
                  ExpressJs
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  MySql
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  Oracle
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  MongoDb
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  PostGrl
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
                  Codeigniter
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  API
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  Bootstrap
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  StyledComponent
                </ExperienceButtonTitle>
                <ExperienceButtonTitle>
                  MUI
                </ExperienceButtonTitle>
          </ExperienceButtonSection>
          </SelfSummary>  
          </Section>       
        </Wrapper>
        <Wrapper>
        <HireMe>Hire me ddddddddddddddddddddd</HireMe>
        </Wrapper>
      {/* <Box sx={{ flexGrow: 1 }} style={{marginTop: '220px'}}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div className='grid-elements'>
          <Box component="span" sx={{ p: 17, border: '1px dashed grey' }}>
                image    image     image
           </Box>
            
            </div>
        </Grid>
        <Grid item>
          <div className='grid-elements'>
          <Typography  variant="h1" component="div"
          colSpan={2} align="center" style={{ verticalAlign: 'top' }}  >
          Lizard
        </Typography>
          </div>
        </Grid>
      </Grid>
    </Box> */}
      </main>
    </>
 
  )
}

export default Home
