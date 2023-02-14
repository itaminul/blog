import styled from 'styled-components'
export const Container = styled.div`
width: 100%;
height: auto;
background: white;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;
`
export const BoxLeft = styled.div`
width: 31%;
height: 375px;
background: white;
margin: 10px;
box-size: 20px;
box-sizing: border-box;

@media screen and (max-width:1200px) { 
        width: 40%;   
}
@media screen and (max-width:600px) {
         width: 90%;
         margin-top: 10px;
 }
`

export const BoxCenter = styled.div`
width: 31%;
height: 395px;
background: white;
margin: 10px;
box-size: 20px;
box-sizing: border-box;

@media screen and (max-width:1200px) { 
        width: 40%;   
}
@media screen and (max-width:600px) {
         width:100%;
         height: 510px;
         margin-top: 10px;
 }
`
export const BoxRight = styled.div`
width: 31%;
height: 395px;
background: white;
margin: 10px;
box-size: 20px;
box-sizing: border-box;
@media screen and (max-width:1200px) {    
        width: 40%;   
        margin-top: 10px
}
@media screen and (max-width:600px) {
         width: 90%;
         margin-top: 10px
 }
`

export const PortTitle = styled.div`
font-weight: 40;
padding: 0px 0px 0px 10px;
line-height: 57px;
`
export const PortTitleDes = styled.div`
font-size: 15px;
font-weight: 30;
text-align: left;
padding: 0px 0px 0px 0px;
line-height: 30px;
`




export const EmploymentTitle = styled.div`
padding: 0px 5px 0px 5px;
line-height: 41px;

@media screen and (max-width:1200px) {    
    width: 100%;   
    margin-top: 10px
}
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px
}
`

export const ExperienceTitleButton = styled.div`
padding: 5px 5px 5px 5px;
  background-color: #d9d9d9;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember",sans-serif;
  font-size: 13px;
  line-height: 22px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  &:hover {
    background-color: #105b72c2;
  }

@media screen and (max-width:1200px) {    
    width: 100%;   
    margin-top: 10px
}
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px
}
`

export const Location = styled.div`
font-size: 15px;
font-weight: 40;
padding: 0px 0px 0px 10px;
line-height: 57px;
`