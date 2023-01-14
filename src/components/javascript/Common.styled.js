import styled from 'styled-components'

export const Container = styled.div`
padding: 120px 10px 0px 10px;
text-align: justify;
width: 100%;
height: auto;
background: white;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;
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
width: 20%;
height: auto;
`


export const DetailsContainer = styled.div`
padding: 20px 0px 0px 0px;
text-align: justify;
width: 100%;
height: auto;
background: white;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;
`

export const DetailsContainerContent = styled.div`
text-align: justify;
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;

@media screen and (max-width:1200px) {    
    width: 100%;   
    margin-top: 10px
}
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px
}
`

export const Title = styled.div`
width: 100%;
text-aling: justify;
font-size: 20px;
font-color: green;
`

export const Description = styled.div`
width: 100%;
text-aling: justify;

`