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
height: 78%;
border: solid #5B6DCD 1px;
padding: 5px 5px 5px 5px;
margin-top: 10px;
margin-left: 0px;
color: black;
border-radius: 3%;
background: #e6e6e6;
box-shadow: 5px 0px 0px 0px #888888;
 
// transition: transform 250ms;
// &:hover{
//         background: white;
//         border: solid #5B6DCD 1px;
//        transform: translateY(-50px);
// }

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
font-size: 20px;
width: 100%;
padding: 30px 20px 20px 20px;
`
export const ReadMore = styled.button`
background: transparent;
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