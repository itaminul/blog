import styled from 'styled-components'

export const Container = styled.div`
padding-top: 120px;
width: 100%;
height: auto;
background: white;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;
`

export const DetailsContent = styled.div`
overflow:auto;
 padding: 0px;
 margin-left: 0px;
 margin-right: 0px;
padding-bottom: 0px;
width: 70%;

@media screen and (max-width:1200px) {    
    width: 100%;   
    margin-top: 10px
}
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px
}
`
export const RightMenu = styled.div`
padding: 5px 5px 5px 10px;
text-align: justify;
width: 25%;
height: auto;

@media screen and (max-width:1200px) {    
    width: 100%;   
    margin-top: 10px
}
@media screen and (max-width:700px) {
     width: 100%;
     margin-top: 10px
}
`