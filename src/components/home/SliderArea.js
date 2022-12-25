import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'

const topToBottom = keyframes`
  0% {
    opacity: 0;
  }
  6% {
    opacity: 0;
    transform: translateY(-50px);
  }
  10% {
    opacity: 1;
    transform: translateY(0px);
  }
  25% {
    opacity: 1;
    transform: translateY(0px);
  }
  29% {
    opacity: 0;
    transform: translateY(30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;


const SliderDiv = styled.div`
  display: inline;
  padding-left: 20px;
  & span {
    animation: ${topToBottom} 10s linear infinite 0s;
    opacity: 0;
    position: absolute;

    :nth-child(2) {
      animation-delay: 2.5s;
    }

    :nth-child(3) {
      animation-delay: 5s;
    }

    :nth-child(4) {
      animation-delay: 7.5s;
    }
  }
  @media screen and (max-width:1200px) {    
    width: 100%;   
}
@media screen and (max-width:600px) {
     width: 100%;
}
`;

const StyledContent= styled.div`
@media screen and (max-width:1200px) {    
    width: 100%;   
    margin-top: 10px
    margin-left: 150px;
}
@media screen and (max-width:600px) {
     width: 100%;
     margin-top: 10px;
     margin-left: 150px;
}
`

const SliderArea = (props, color) => {
    // console.log(props.tutorials)
  return (
    <StyledContent>
        
        <h1 style={{paddingTop: '120px', marginLeft: '-250px'}}>
           
        You Can Learn 

        <SliderDiv>
        {props.items.map(item => (
            <span key={item} css={{ color }}>
                {item}
            </span>
            ))}
        </SliderDiv>

        </h1>

    </StyledContent>
  )
}

export default SliderArea