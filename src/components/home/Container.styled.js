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

export const TopBackground = styled.div`
width: 100%;
height: 126px;
background: blue;
box-sizing: border-box;
@media (max-width: 967px) {  
    margin-top: 50px
      display: none;   
  
`
export const BoxLeft = styled.div`
width: 20%;
height: 376px;
background: blue;
margin: 10px;
margin-top: -90px;
box-size: 20px;
box-sizing: border-box;
@media screen and (max-width:1200px) {    
       margin-top: -90px;
        width: 40%;   
}

@media screen and (max-width:600px) {
         width: 90%;
         margin-top: -90px;
 }
`

export const BoxRight = styled.div`
width: 60%;
height: 376px;
border: 1px solid red;
margin: 10px;
margin-top: -90px;
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

export const Title = styled.h1`
text-align: left;
margin: 0px 0px 20px 10px;
`

export const SubTitle = styled.div`
font-size: 15px;
text-align: left;
margin: 0px 0px 40px 10px;
`


export const TitleSummary = styled.div`
font-size: 15px;
text-align: left;
margin: 0px 20px 10px 10px;
line-height: 28px;
font-weight: 400;
`