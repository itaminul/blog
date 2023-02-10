import styled from 'styled-components'
export const Container = styled.div`
width: 100%;
margin-top: 30px;
height: auto;
background: white;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;
`
export const BoxLeft = styled.div`
width: 30%;
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

export const BoxRight = styled.div`
width: 64%;
height: 375px;
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




export const WrapperEmploymentLeft = styled.section`
width: 100%;

@media screen and (max-width:1200px) {    
    width: 40%;   
    margin-top: 10px
}
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px
}

`
export const WrapperEmploymentTitle = styled.section`
font-size: 20px;
font-weight: 40;
padding: 10px 10px 10px 10px;
text-align: left;
`

export const WrapperEmploymentRight = styled.section`
width: 100%;
padding-top: 2%;
padding-left: 10px;
font-weight: 350;
ul ol {  
  font-weight: 30;
}
`
export const VerticalAling = styled.button`  
border: none;
border-left: 2px solid black;
display: table-cell;  
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


export const WrapperSkilsRight = styled.section`
width: 100%;
padding: 0px 10px 10px 30px;
line-height: 180%;
text-align: left;
font-weight: 350;
ul li {  
  font-weight: 30;
}

@media screen and (max-width:1200px) {    
    width: 40%;   
    margin-top: 10px;
    ul li {
        font-size: 16px;
        font-weight: 350;
        line-height: 180%;
     }
}
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 0px;
     ul li {
        font-size: 16px;
        font-weight: 350;
        line-height: 180%;
     }
}
`
