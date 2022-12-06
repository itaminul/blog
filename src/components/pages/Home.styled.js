import styled from "styled-components"
 export const Wrapper = styled.section`
padding-top: 84px;
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
border: 0px solid black;
padding-top: 10%;
margin-left:2%;
border-bottom-right-radius: 25%;
float: left;
display: flex;
  justify-content: space-between;
  align-items: flex-end;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
@media (min-width: 554px) {
  font-size: 1.5rem;
}
`
export const SelfSummary = styled.div`
width: 66%;
height: auto;
border: 0px solid black;
padding-top: 10%;
margin-left:2%;
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
line-height: 28px;
font-weight: 400;
`
export const MarginTop = styled.div`
  margin-top: 13%;
  `

  export const ExperienceButtonSection = styled.div `
  border: 2px solid white;
  `
export const ExperienceButtonTitle = styled.div`
  margin-left: 1%;
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
font-size: 10px;
width: 100%;
margin-top: 5%;
padding: 15px 0px 0px 0px;
height: 50px;
@media (min-width: 1024px) {
  font-size: 1.5rem;
}
`

export const WrapperSlogan = styled.section`
padding-top: 5%;
`



export const PortFoleo = styled.div`
width: 30%;
height: auto;
border: 0px solid black;
padding-top: 10%;
margin-left: 2%;
float: left;
`
export const PortTitle = styled.div`
font-size: 25px;
font-weight: 40;
margin-top: -45%;
padding: 0px 0px 0px 10px;
line-height: 57px;
height: 350px;
`
export const PortTitleDes = styled.div`
font-size: 15px;
font-weight: 30;
text-align: left;
padding: 0px 0px 0px 0px;
line-height: 30px;
`

export const ExperienceTitle = styled.div`
float: left;
font-weight: 40;
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

padding: 5px 10px 5px 10px;
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
  width: 850%;
  &:hover {
    background-color: #105b72c2;
  }
`
export const ExperButtonMarginLeft = styled.div`
margin-left: 110px;
`
export const ExperienceYearTitle = styled.div`
float: right;
font-size: 15px;
text-align: left;
padding: 0px 0px 0px 0px;
max-width: 80%
line-height: 10px;
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

`
export const EmploymentTitle = styled.div`
font-size: 25px;
margin-top: -45%;
padding: 0px 0px 0px 10px;
line-height: 57px;
height: 350px;
`

export const WrapperEmploymentLeft = styled.section`
float: left;
width: 32%;
padding-top: 10%;
`
export const WrapperEmploymentTitle = styled.section`
margin-top: -120px;
margin-left: -250px;
font-weight: 40;
`


export const WrapperEmploymentRight = styled.section`
float: right;
width: 66%;
padding-top: 2%;
font-weight: 350;
ul ol {  
  font-weight: 30;
}
`
export const VerticalAling = styled.button`  
border: none;
border-left: 2px solid black;
hyphens: auto;
height: 50px; 
display: table-cell;
  vertical-align: middle;
  width: @icon-size;
  height: @icon-size;
  
  position:relative;
  padding: 0px 0px 0px 0px;
  box-sizing:border-box;
  
`
export const ArrowSign = styled.div`
border-right:2px solid black;
    border-bottom:2px solid black;
    width:10px;
    height:10px;
    transform: rotate(-45deg);
    margin-top:40px;
    `

    export const WrapperSkils = styled.div`
    margin-top: 10%;
    padding-top: 10%;
    
    `
    export const SectionSkils = styled.div`
    width: 100%;
    float: left;`
    
export const WrapperSkilsLeft = styled.section`
float: left;
width: 32%;
padding-top: 10%;
`

export const WrapperSkilsRight = styled.section`
float: right;
width: 66%;
padding-top: 2%;
text-align: left;
font-weight: 350;
ul li {  
  font-weight: 30;
}
`

