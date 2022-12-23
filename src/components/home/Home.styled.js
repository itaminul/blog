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
background: #333333; 

`
export const BoxLeft = styled.div`
width: 100%;
height: 376px;
background: white;
margin: 10px;
margin-top: -230px;
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
 height: 120%;
 border: solid #5B6DCD 0px;
 padding: 5px;
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 flex-flow: wrap; 

 ` 

export const Blog = styled.div`
box-sizing: border-box;
width: 24%;
border: solid #5B6DCD 1px;
padding: 5px;
margin-left: 0px;
color: black;
border-radius: 3%;
 
transition: transform 250ms;
&:hover{
        background: white;
        border: solid #5B6DCD 3px;
       transform: translateY(-50px);
}




@media screen and (max-width:1200px) {    
        width: 40%;   
        margin-top: 10px
}
@media screen and (max-width:600px) {
         width: 90%;
         margin-top: 10px
 }

`

export const BlogTitle = styled.div`

`
