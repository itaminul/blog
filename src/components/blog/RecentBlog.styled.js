import styled from 'styled-components'

export const RightContainer = styled.div`
padding-top: 5px 5px 5px 5px;
width: 100%;
background: white;
height: auto;
overflow: scroll;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;

@media screen and (max-width:1200px) {    
    width: 100%;   
    margin-top: 10px
}
@media screen and (max-width:700px) {
     width: 100%;
     margin-top: 10px
}
`