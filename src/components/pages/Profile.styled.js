import styled from "styled-components"

export const Container = styled.div`
width: 100%;
padding-horizontal: 10px;
flex-direction: row;
align-items: center;
justify-content: space-between;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
`

export const ContentBox = styled.div`
  display: flex;
  height: 50vh;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: left;
  grid-area: content;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const Content1 = styled.div`
background: #a6b8b9;
height: 100%;
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
export const Content2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
  background: #a6b8b9;
  width: 100%;
  height: 100%;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const Heading = styled.h1`
  color: #fff;
  text-align: left;
  margin-bottom: 24px;
  font-size: 28px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  `;

  export const SubHeading = styled.h3`
  color: #fff;
  font-size: 15px;
text-align: left;
  margin-bottom: 24px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  `;


export const TitleSummary = styled.div`
font-size: 15px;
text-align: left;
margin-top: 2%;
line-height: 28px;
font-weight: 400;
`


export const ExperienceButtonSection = styled.div `
border: 2px solid white;
`

export const ExperienceButtonTitle = styled.div`
  margin-left: 1%;
  margin-top: 10px;
  background-color: #d9d9d9;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember",sans-serif;
  font-size: 13px;
  line-height: 22px;
  padding: 0 10px 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100px;
  &:hover {
    background-color: #105b72c2;
  }
`