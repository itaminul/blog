import styled from 'styled-components'

export const Container = styled.div`
padding: 120px 10px 0px 0px;
text-align: justify;
width: 100%;
height: auto;
background: white;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;
`


export const LeftMenu = styled.div`
text-align: justify;
width: 18%;
height: 180px;

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
width: 78%;
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
padding: 0px 0px 0px 5px;
text-align: justify;
width: 20%;

height: auto;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;
border-left: 1px solid #999999;

@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px
}
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
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px
}
`

export const DetailsContainerContent = styled.div`
box-sizing: border-box;
border: solid #5B6DCD 0px;
border-radius: 10px;
padding: 5px 5px 5px 5px;
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
font-size: 1.5rem;
color: #374151;
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px
}
`

export const Description = styled.div`
width: 100%;
text-aling: justify;
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px
}

`
export const Example = styled.div`
width: 100%;
text-aling: justify;
font-size: 1.5rem;
color: #374151;
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px
}
`

export const GeneralExample = styled.div`
width: 100%;
text-aling: justify;
font-size: 17px;
background: #282828;
color: white;
padding: 2px 2px 2px 5px;
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px
}
`
export const Overview = styled.div`
width: 100%;
text-aling: justify;
font-size: 1.5rem;
color: #374151;
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px
}
`


export const OverviewTitle = styled.div`
width: 100%;
text-aling: justify;
font-size: 16px;
`

export const LeftMTitle = styled.div`
    background: #e6e6e6;
    color: black;
    padding-left:  25px;
`