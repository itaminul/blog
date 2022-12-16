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
background: rgb(0,36,34);
background: linear-gradient(90deg, rgba(0,36,34,1) 0%, rgba(0,212,255,1) 100%);

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
background: white;
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
margin: 15px 0px 20px 10px;
`

export const SubTitle = styled.div`
font-size: 15px;
text-align: left;
margin: 0px 0px 40px 10px;
`


export const TitleSummary = styled.div`
font-size: 15px;
font-weight: 30;
text-align: left;
margin: 0px 20px 10px 10px;
line-height: 28px;
`
export const ExpSummary = styled.div`
font-size: 15px;
font-weight: 30;
text-align: left;
line-height: 28px;

@media screen and (max-width:1200px) {    
        width: 40%;   
        margin-top: 10px
}
@media screen and (max-width:600px) {
         width: 90%;
         margin-top: 10px
 }
`

export const ExpButton = styled.button`
background-color: #d9d9d9;
border: 2px solid #d5d9d9;
box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
color: #0f1111;
cursor: pointer;
display: inline-block;
font-family: "Amazon Ember",sans-serif;
position: relative;
text-align: center;
text-decoration: none;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
font-size: 10px;
font-weight: 30;
  margin: 3px 3px 3px 3px;
  padding: 5px 5px 5px 5px;
  border-radius: 5px;
&:hover {
  background-color: #105b72c2;
}

@media screen and (max-width:100px) {    
        width: 100%;   
        margin-top: 10px;
        margin: 3px 3px 3px 3px;
        padding: 5px 5px 5px 5px;
        font-size: 15px;
       font-weight: 30;
}
@media screen and (max-width:100px) {
         width: 100%;
         margin-top: 10px
         margin: 3px 3px 3px 3px;
         padding: 5px 5px 5px 5px;
         font-size: 15px;
         font-weight: 30;
 }
`


export const HireMe = styled.div`
border: 0px solid black;
background: #c2d6d6;
font-size: 10px;
width: 100%;
margin-top: 1%;
padding: 15px 0px 0px 0px;
height: 50px;
@media screen and (max-width:1200px) {    
        width: 100%;   
        margin-top: 190px;
        ont-size: 1.5rem;
}

@media screen and (max-width:600px) {
        font-size: 1.5rem;
        margin-left: 20px;
        width: 90%;
        margin-top: 190px
 }

`
