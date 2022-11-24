import styled from "styled-components"
 export const Wrapper = styled.section`
padding-top: 84px;
background: papayawhip;
display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1px;
  padding-right: 1px;
`

export const Section = styled.div`
  width: 100%;
  float: left;`
  

export const ImageContainer = styled.div`
display: flex;
width: 28%;
height: 260px;
border: 0px solid black;
padding-top: 10%;
margin-left:2%;
background: #d9d9d9;
border-bottom-right-radius: 25%;
float: left;
@media (min-width: 1024px) {
  font-size: 1.5rem;
}
`
export const SelfSummary = styled.div`
width: 66%;
height: auto;
border: 0px solid black;
padding-top: 10%;
margin-left:2%;
background: #d9d9d9;
float: right;
`

export const Title = styled.div`
font-size: 25px;
text-align: left;
margin-top: -12%;
padding: 0 0px 0px 0px;
`

export const SubTitle = styled.div`
font-size: 15px;
text-align: left;
margin-top: 2%;
`


export const TitleSummary = styled.div`
font-size: 15px;
text-align: left;
margin-top: 2%;
`
export const MarginTop = styled.div`
  margin-top: 13%;
  `

  export const ExperienceButtonSection = styled.div `
  border: 2px solid white;
  `
export const ExperienceButtonTitle = styled.div`
  margin-left: 0%;
  margin-top: 10px;
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
  padding: 0 10px 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100px;
  &:hover {
    background-color: #105b72c2;
  }
`
export const HireMe = styled.div`
border: 0px solid black;
background: #c2d6d6;
width: 100%;
margin-top: 5%;
height: 50px;
@media (min-width: 1024px) {
  font-size: 1.5rem;
}
`

export const WrapperSlogan = styled.section`
padding-top: 5%;
background: papayawhip;
`



export const PortFoleo = styled.div`
width: 30%;
height: auto;
border: 0px solid black;
padding-top: 10%;
margin-left: 2%;
background: #d9d9d9;
float: left;
`
export const PortTitle = styled.div`
font-size: 25px;
margin-top: -40%;
padding: 0 0px 0px 0px;
`
export const PortTitleDes = styled.div`
font-size: 15px;
text-align: left;
padding: 10px 0px 0px 0px;
`

export const ExperienceTitle = styled.div`
float: left;
font-size: 15px;
text-align: left;
padding: 40px 0px 0px 0px;
max-width: 13%
`


export const ExperienceYears = styled.div`
float: right;
font-size: 15px;
text-align: left;
padding: 21px 0px 0px 0px;
max-width: 50%
`

export const ExperienceTitleButton = styled.div`
float: left;
margin-left: 0%;
  margin-top: 5px;
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
  padding: 0 10px 5px 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100px;
  &:hover {
    background-color: #105b72c2;
  }
`


export const ExperienceYearTitle = styled.div`
float: right;
font-size: 15px;
text-align: left;
padding: 0px 0px 0px 0px;
max-width: 80%
`
export const ExperienceYearButton = styled.div`
  float: right;
  margin-left: 0px;
  margin-top: 0px;
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
  padding: 0px 10px 5px 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100px;
  &:hover {
    background-color: #105b72c2;
  }
`

export const WrapperEmployment = styled.section`
margin-top: 10%;
padding-top: 10%;
background: papayawhip;
`

export const WrapperEmploymentLeft = styled.section`
float: left;
width: 32%;
padding-top: 10%;
background: green;
`


export const WrapperEmploymentRight = styled.section`
float: right;
width: 66%;
padding-top: 10%;
background: blue;
`
export const VerticalAling = styled.button`  
border: none;
border-left: 6px solid red;
height: 150px !important; 
display: table-cell;
  vertical-align: middle;
  width: @icon-size;
  height: @icon-size;
`

