import styled from 'styled-components'

export const LeftContainer = styled.div`
padding-top: 0px;
width: 100%;
background: white;
height: 410px;
overflow: scroll;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;
text-decoration: none;
   &:Link {
    text-decoration: none;
  }
`
export const LeftMenu = styled.div`
text-align: justify;
width: 18%;
height: 150px;
text-decoration: none;

  &:Link {
    text-decoration: none;
  }
`

export const DetailsContent = styled.div`
width: 64%;
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
text-align: justify;
width: 18%;
height: 150px;
`