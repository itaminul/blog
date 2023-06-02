import React from 'react'
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import HailIcon from '@mui/icons-material/Hail';
import { GoogleMap } from './GoogleMap';
import { 
Container,
BoxLeft,
BoxRight,
BoxCenter,
PortTitle,
PortTitleDes,
EmploymentTitle,
ExperienceTitleButton,
Location
} from '../portfolio/Service.styled'
function Service () {
  return (
    <div>
      <Container>
        <BoxLeft>
        <PortTitle>
              <ImportContactsIcon 
              fontSize="small"
              style={{marginRight: "10px"}}
               ></ImportContactsIcon>
            <span style={{fontWeight: '40'}}>
             Portfolio
             </span>
             <PortTitleDes>
              
            Node.js, Express.js, Prisma,React, Babel, Webpack, MUI (Material UI), Styled-components,MySQL, Oracle, MongoDB, Mongoose

             </PortTitleDes>
             </PortTitle>

        </BoxLeft>
        
        <BoxCenter>
          
          <EmploymentTitle>
          <RunningWithErrorsIcon fontSize="small" 
          style={{marginRight: "10px"}}
          >
          </RunningWithErrorsIcon>
        <span style={{fontWeight: '40'}}>
        Experience
        </span>  
        <ExperienceTitleButton>
                <span>NestJS </span>
                 <span style={{marginLeft: "70%"}}>2 years</span>
              </ExperienceTitleButton>
              <ExperienceTitleButton>
                <span>NodeJs </span>
                 <span style={{marginLeft: "70%"}}>2 years</span>
              </ExperienceTitleButton>
              <ExperienceTitleButton>
              <span>ExpressJs </span>
                 <span style={{marginLeft: "68%"}}>2 years</span>                
              </ExperienceTitleButton>
              <ExperienceTitleButton>
              <span>ReactJs </span>
                 <span style={{marginLeft: "70%"}}>1 years</span>
                
              </ExperienceTitleButton>
              <ExperienceTitleButton>
              <span>JavaScript </span>
                 <span style={{marginLeft: "68%"}}>8 years</span>
                
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
                 <span style={{marginLeft: "70%"}}>8 years</span>
                
              </ExperienceTitleButton>
              <ExperienceTitleButton>
              <span>Oracle </span>
                 <span style={{marginLeft: "68%"}}>8 years</span>
                
              </ExperienceTitleButton>            
          
              <ExperienceTitleButton>
              <span>Prisma.io </span>
                 <span style={{marginLeft: "68%"}}>8 years</span>
                
              </ExperienceTitleButton>            
          
             </EmploymentTitle>

        </BoxCenter>
        <BoxRight>
          <Location>
            
          <HailIcon fontSize="small" 
          style={{marginRight: "10px"}}
          ></HailIcon>
          <span style={{fontWeight: '40'}}>
          Location
          </span>
          <div className="mapouter">
            <div className="gmap_canvas">
            <iframe className="gmap_iframe" width="100%" 
           src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Dhaka Bangladesh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
           style={{height: "310px"}}
           >

           </iframe>
           </div>
           </div>
           
        
          {/* <GoogleMap /> */}

          </Location>
        </BoxRight>

      </Container>
           
      </div>
  )
}

export default Service