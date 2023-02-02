import styled from 'styled-components'

export const Container = styled.div`
margin-top: 170px;
width: 100%;
height: auto;
background: white;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;
`
export const SliderBox = styled.div`
margin-top: 65px;
width: 100%;
height: 450px;
color: white;
background: #3346a8;
`
export const BoxLeft = styled.div`
background: white;
margin: 10px;
margin-top: -300px;
@media screen and (max-width:1200px) {    
       margin-top: -90px;
        width: 40%;   
}
@media screen and (max-width:600px) {
         width: 90%;
         margin-top: -90px;
 }
`
export const BoxMiddle = styled.div`
width: 33%;
height: 376px;
background: white;
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
width: 28%;
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
 export const BlogBox = styled.div`
 box-sizing: border-box;
 width: 100%;
 height: 200px;
 border: solid #5B6DCD 0px;
 background: rgb(95, 99, 104);
 padding: 0px 12px 18px 10px;
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 flex-flow: wrap; 

@media screen and (max-width:1200px) {    
box-sizing: border-box;
        width: 100%;
        height: 200px;
        border: solid #5B6DCD 0px;
        background: #e6e6e6;
        padding: 0px 12px 18px 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-flow: wrap; 
}
@media screen and (max-width:600px) {

        box-sizing: border-box;
        width: 100%;
        height: 1000px;
        border: solid #5B6DCD 0px;
        background: #e6e6e6;
        padding: 0px 12px 10px 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-flow: wrap; 
 }

 ` 
export const Blog = styled.div`
box-sizing: border-box;
width: 19%;
height: 80px;
border: solid #5B6DCD 0px;
padding: 10px 5px 12px 5px;
margin-top: 10px;
margin-left: 0px;
color: black;
border-radius: 0%;
background: white;
box-shadow: 0px 0px 0px 0px #5B6DCD;
 
// transition: transform 250ms;
&:hover{
        background: white;
        border: solid #5B6DCD 0px;
        box-shadow: 0px 0px 0px 0px #5B6DCD;
       transform: translateY(-5px);
}

@media screen and (max-width:1200px) {    
        width: 40%;   
        margin-top: 10px
}
@media screen and (max-width:600px) {
         width: 90%;
         margin-top: 10px
        border: solid #5B6DCD 1px;
        padding: 2px 2px 15px 2px;
 }

`

export const BlogImage = styled.div`
font-size: 20px;
width: 100%;
padding: 0px 0px 0px 0px;
text-align: justify;
`
export const BlogImageTitle = styled.div`
width: 100%;
margin-left: 80px !important;
text-aling: right;
text-decoration:none;
`

export const BlogTitle = styled.div`
font-size: 20px;
width: 100%;
padding: 0px 0px 0px 0px;
`
export const ReadMore = styled.button`
border-radius: 10px;
border: 0px solid palevioletred;
color: black;
margin: 0 0em;
margin-top: 68px;
width: 100%;
height: 30px;
font-size: 1.08rem;
font-weight: 800;
padding: 0em .0em;
background: #bfbfbf;
&:hover{
    color: blue;
}
@media screen and (max-width: 45em) {
    padding: 1rem 1rem;
    font-size: 1rem;
    margin-top: 3.5rem;
   }
`

export const List = styled.ul`
list-style: none;
padding: 3px 10px 10px 10px;
marign-bottom: 0px;
text-align: center;
`

export const ExplorAllTopic = styled.ul`
padding: 3px 0px 0px 0px;
margin-top: 0px;
text-align: center;
font-weight: 900;
font-size: 26px;
@media screen and (max-width: 45em) {
        padding: 1rem 1rem;
        font-size: 1rem;
        margin-top: 600px;
       }
`


export const ExplorSummary = styled.div`
font-size: 25px;
font-weight: 30;
text-align: left;
line-height: 38px;
width: 85%;

@media screen and (max-width:1200px) {    
        width: 40%;   
        margin-top: 100px
}
@media screen and (max-width:600px) {
        width: 85%;
         margin-top: 1%
        
 }
`

export const ExpButton = styled.button`
padding-left: 200px;
width: auto;
border-radius: 2px;
border: 1px solid blue;
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
  margin: 5px 5px 5px 5px;
  padding: 10px 10px 10px 10px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
&:hover {
  color: blue;
  font-size: 16px;
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
         margin: 0px 0px 0px 0px;
         padding: 0px 0px 0px 0px;
         font-size: 15px;
         font-weight: 30;
         width: 15%;
border-radius: 10%;
border: 2px solid blue;
 }
`