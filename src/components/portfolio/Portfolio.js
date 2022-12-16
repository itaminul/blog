import React from 'react'
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';

import {
  Container, 
  BoxLeft, 
  BoxRight,
  WrapperEmploymentLeft,
  WrapperEmploymentTitle,
  VerticalAling,
  WrapperEmploymentRight,
  ArrowSign
 } from '../portfolio/Portfolio.styled'
function Portfolio () {
  return (
    <Container>
      <BoxLeft>
       
      <WrapperEmploymentLeft>   
                     
                     <WrapperEmploymentTitle>
                     <BrightnessMediumIcon fontSize="smal" style={{marginRight: "10px"}}></BrightnessMediumIcon> 
                     
                     Employment 
                     </WrapperEmploymentTitle>
                     </WrapperEmploymentLeft>
         
                     {/* <VerticalAling style={{height: "300px", marginTop: "0px", marginLeft: "401px"}}/>    */}


      </BoxLeft>
      <BoxRight>
        
        <WrapperEmploymentRight>
              <ul>
               <ol style={{textAlign: "left",
                paddingLeft: "50px",
                fontSize: "20px"
                }}>
                Senior Web Developer with team lead
                </ol>
                <ArrowSign></ArrowSign>
                <ol style={{textAlign: "left", marginTop: "-35px", paddingTop: "20px",paddingLeft: "30px"}}>
                Helped direct, build, and engineer most of the company’s projects.

                  </ol>
                  <ArrowSign></ArrowSign>
                <ol style={{textAlign: "left", marginTop: "-35px", paddingTop: "20px",paddingLeft: "30px"}}>
                Introduced new technologies into the company’s production team.
                  </ol>
                  <ArrowSign></ArrowSign>
                <ol style={{textAlign: "left", marginTop: "-35px", paddingTop: "20px",paddingLeft: "30px"}}>
                Helped implement back-end services and APIs.
                  </ol>
                  <ArrowSign></ArrowSign>
                <ol style={{textAlign: "left", marginTop: "-35px", paddingTop: "20px",paddingLeft: "30px"}}>
                  API Intregration
                  </ol>
                  <ArrowSign></ArrowSign>
                <ol style={{textAlign: "left", marginTop: "-35px", paddingTop: "20px" ,paddingLeft: "30px"}}>
                  Front-End
                  </ol>
                  <ArrowSign></ArrowSign>
                <ol style={{textAlign: "left", marginTop: "-35px", paddingTop: "20px",paddingLeft: "30px"}}>
                  Back-End
                  </ol>
                
               
              </ul>
            </WrapperEmploymentRight> 
      </BoxRight>
    </Container>
  )
}

export default Portfolio
