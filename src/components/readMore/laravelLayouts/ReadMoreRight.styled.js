import styled from 'styled-components'

export const RightContainer = styled.div`
padding-top: 0px;
width: 100%;
background: white;
height: auto;
overflow: scroll;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;
border-left: 2px solid #999999;

@media screen and (max-width:1200px) {    
    width: 100%;   
    margin-top: 10px
}
@media screen and (max-width:700px) {
     width: 100%;
     margin-top: 10px
}
`