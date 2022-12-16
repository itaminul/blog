import React from 'react'
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import {
  Container, 
  BoxLeft, 
  BoxRight,
  WrapperEmploymentLeft,
  WrapperEmploymentTitle,
  VerticalAling,
  WrapperSkilsRight
 } from '../portfolio/Experience.styled'

function Experience () {
  return (
    <Container>
      <BoxLeft>
       
      <WrapperEmploymentLeft>   
                     
                     <WrapperEmploymentTitle>
                     <BrightnessMediumIcon fontSize="smal" style={{marginRight: "10px"}}></BrightnessMediumIcon> 
                     
                     Skils 
                     </WrapperEmploymentTitle>
                     </WrapperEmploymentLeft>
{/*          
                     <VerticalAling style={{height: "420px", marginTop: "0px", marginLeft: "401px"}}/>    */}


      </BoxLeft>
      <BoxRight>
        
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

              ORM
              <ul>
                <li>              
                
                 Mongoose, Prisma.

                </li>
              </ul>

              Other
              <ul>
                <li>              
                Back-end Development, Leadership, Software Architecture, Software Development, QA Testing, Software Development, Full-stack, Front-end Development, Data Visualization.

                </li>
              </ul>
            </WrapperSkilsRight> 
      </BoxRight>
    </Container>
  )
}

export default Experience
