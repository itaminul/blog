import styled from 'styled-components'

export const Container = styled.div`
margin-top: 100px;
width: 100%;
height: auto;
background: white;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;
`

export const LeftSideBar = styled.div`
width: 20%;
border-left: 2px solid green;
height: 150px;

@media screen and (max-width:1200px) {    
    width: 100%;   
    margin-top: 10px
}
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px
}
`

export const DetailsContent = styled.div`
width: 80%;

@media screen and (max-width:1200px) {    
    width: 100%;   
    margin-top: 10px
}
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px
}
`