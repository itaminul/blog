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
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import HailIcon from '@mui/icons-material/Hail';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
// import profilePic from '../../../../profilepic.png'
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
   HireMe,
   WrapperSlogan,
   PortFoleo,
   PortTitle,
   PortTitleDes,
   ExperienceTitle,
   ExperienceYears,
   ExperienceTitleButton,
   ExperienceYearTitle,
   ExperienceYearButton,
   WrapperEmployment,
   WrapperEmploymentLeft,
   WrapperEmploymentRight,
   VerticalAling,
   ArrowSign,
   WrapperEmploymentTitle,
   EmploymentTitle,
   ExperButtonMarginLeft,
   WrapperSkils,
   SectionSkils,
   WrapperSkilsLeft,
   WrapperSkilsRight
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
          <img src="/images.jpeg" alt="image" />
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
                <HireMe>Aminul is now available for hire</HireMe>
          </ExperienceButtonSection>
          
          </SelfSummary>  
        
          </Section>    
        </Wrapper>

        <WrapperSlogan>
          
          <Section>            
          <PortFoleo>
             <PortTitle>
              <ImportContactsIcon 
              fontSize="small"
              style={{marginRight: "10px"}}
               ></ImportContactsIcon>
             Portfolio
             <PortTitleDes>
              
            Node.js, Express.js, Prisma,React, Babel, Webpack, MUI (Material UI), Styled-components,MySQL, Oracle, MongoDB, Mongoose

             </PortTitleDes>
             </PortTitle>
          </PortFoleo> 
          <PortFoleo>
          <EmploymentTitle>
          <RunningWithErrorsIcon fontSize="small" 
          style={{marginRight: "10px"}}
          >

          </RunningWithErrorsIcon>
        <span style={{fontWeight: '40'}}>
        Experience
        </span>  
            <ExperienceTitle>
              <ExperienceTitleButton>
                <span>NodeJs </span>
                 <span style={{marginLeft: "74%"}}>2 years</span>
              </ExperienceTitleButton>
              <ExperienceTitleButton>
              <span>ExpressJs </span>
                 <span style={{marginLeft: "70%"}}>2 years</span>
                
              </ExperienceTitleButton>
              <ExperienceTitleButton>
              <span>ReactJs </span>
                 <span style={{marginLeft: "74%"}}>1 years</span>
                
              </ExperienceTitleButton>
              <ExperienceTitleButton>
              <span>JavaScript </span>
                 <span style={{marginLeft: "70%"}}>8 years</span>
                
              </ExperienceTitleButton>
              <ExperienceTitleButton>
              <span>PHP </span>
                 <span style={{marginLeft: "74%"}}>8 years</span>
                
              </ExperienceTitleButton>
              <ExperienceTitleButton>
              <span>MongoDB </span>
                 <span style={{marginLeft: "70%"}}>2 years</span>
                
              </ExperienceTitleButton>
              <ExperienceTitleButton>
              <span>Mysql </span>
                 <span style={{marginLeft: "74%"}}>8 years</span>
                
              </ExperienceTitleButton>
              <ExperienceTitleButton>
              <span>Oracle </span>
                 <span style={{marginLeft: "74%"}}>8 years</span>
                
              </ExperienceTitleButton>
            
            </ExperienceTitle>

            {/* <ExperienceYears>
              <ExperienceYearTitle>
              <ExperienceYearButton>
                1 Years
              </ExperienceYearButton>
              <ExperienceYearButton>
                2 Years
              </ExperienceYearButton>
              <ExperienceYearButton>
                3 Years
              </ExperienceYearButton>
              <ExperienceYearButton>
                4 Years
              </ExperienceYearButton>
              <ExperienceYearButton>
                5 Years
              </ExperienceYearButton>
              <ExperienceYearButton>
                6 Years
              </ExperienceYearButton>
              <ExperienceYearButton>
                7 Years
              </ExperienceYearButton>
              </ExperienceYearTitle>

            </ExperienceYears> */}
             </EmploymentTitle>
          </PortFoleo> 
          <PortFoleo>
          <PortTitle>
          <HailIcon fontSize="small" 
          style={{marginRight: "10px"}}
          ></HailIcon>
          <span style={{fontWeight: '40'}}>
          Location
          </span>
          
             </PortTitle>
          </PortFoleo> 
        
          </Section>    
        </WrapperSlogan>

        <WrapperEmployment>
          <Section>
            <WrapperEmploymentLeft>   
                     
            <WrapperEmploymentTitle>
            <BrightnessMediumIcon fontSize="smal" style={{marginRight: "10px"}}></BrightnessMediumIcon>  
            
            Employment
            </WrapperEmploymentTitle>
            </WrapperEmploymentLeft>

            <VerticalAling style={{height: "520px", marginTop: "20px"}}/>   
                
            <WrapperEmploymentRight>
              <ul>
               <ol style={{textAlign: "left"}}>
                Senior Web Developer with team lead
                </ol>
                <ArrowSign></ArrowSign>
                <ol style={{textAlign: "left", marginTop: "-35px", paddingTop: "20px"}}>
                Helped direct, build, and engineer most of the company’s projects.

                  </ol>
                  <ArrowSign></ArrowSign>
                <ol style={{textAlign: "left", marginTop: "-35px", paddingTop: "20px"}}>
                Introduced new technologies into the company’s production team.
                  </ol>
                  <ArrowSign></ArrowSign>
                <ol style={{textAlign: "left", marginTop: "-35px", paddingTop: "20px"}}>
                Helped implement back-end services and APIs.
                  </ol>
                  <ArrowSign></ArrowSign>
                <ol style={{textAlign: "left", marginTop: "-35px", paddingTop: "20px"}}>
                  API Intregration
                  </ol>
                  <ArrowSign></ArrowSign>
                <ol style={{textAlign: "left", marginTop: "-35px", paddingTop: "20px"}}>
                  Front-End
                  </ol>
                  <ArrowSign></ArrowSign>
                <ol style={{textAlign: "left", marginTop: "-35px", paddingTop: "20px"}}>
                  Back-End
                  </ol>
                
               
              </ul>
            </WrapperEmploymentRight> 
            </Section>
        </WrapperEmployment>

        <WrapperSkils>
          <SectionSkils>
            <WrapperSkilsLeft>   
                     
            <WrapperEmploymentTitle>
            <BrightnessMediumIcon fontSize="smal" style={{marginRight: "10px"}}></BrightnessMediumIcon>  
            Slils</WrapperEmploymentTitle>
            </WrapperSkilsLeft>

            {/* <VerticalAling style={{height: "520px", marginTop: "20px"}}/>    */}
                
            <WrapperSkilsRight>
            Languages
              <ul>
                <li>
                HTML, PHP, JavaScript, CSS.
                </li>
              </ul>
              
              Frameworks
              <ul>
                <li>              
                 Express, Laravel, Codeigniter

                </li>
              </ul>


              Libraries/APIs
              <ul>
                <li>              
                Node.js, jQuery, Facebook API, React

                </li>
              </ul>

              Tools
              <ul>
                <li>              
                
                  PhpStorm, Sublime Text 3, Git, Composer, Terminal, VS code

                </li>
              </ul>
              Paradigms
              <ul>
                <li>              
                
                REST, Model View Controller (MVC)

                </li>
              </ul>

              Platforms
              <ul>
                <li>              
                
                 Linux, Windows

                </li>
              </ul>


              Storage
              <ul>
                <li>              
                
                  MySQL, Oracle, MongoDB, Relational Databases, NoSQL.

                </li>
              </ul>

              Other
              <ul>
                <li>              
                Back-end Development, Leadership, Software Architecture, Software Development, QA Testing, Software Development, Full-stack, Front-end Development, Data Visualization.

                </li>
              </ul>
            </WrapperSkilsRight> 
            
            </SectionSkils>
        </WrapperSkils>
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
