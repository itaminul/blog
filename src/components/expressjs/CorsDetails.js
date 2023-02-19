
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import {
    DetailsContainer,
    DetailsContainerContent,
    DetailsContent,
    Title,
    Description,
    RightMenu,
    Example,
    Overview,
    GeneralExample,
    OverviewTitle
} from '../../components/javascript/Common.styled'

const CorsDetails = () => {
  return (
    <div>
        <DetailsContainer>
            <DetailsContainerContent>
                <Title>
                    <div id="title">
                    What is CorsDetails ?
                     </div>                     
                     </Title>                 
                <Description>
                <div id="description">
                The call stack keeps track of functions to be executed. When we call a function, it’s added or pushed to the top of the call stack. When the function returns, it’s removed, or popped from the call stack. Any asynchronous functions (fetch, setTimeout, async, etc.) are moved to the event queue 
                </div>
                </Description>
                <Overview>
                  <div id='overview'>
                    Overview
                    <OverviewTitle>
                      <div>
                      You might have heard that JavaScript is single-threaded. This means it has only one call stack and it can only process one statement at a time. The call stack follows the LIFO (Last In, First Out) principle, which means it will always process the call on top of the stack first.
                        When a function is called it’s added to the stack. When a function calls another function, it’s added on top of the calling function.

                        The Call Stack is a mechanism for the JavaScript Engine to keep track of execution contexts, which to enter, which to exit, or which to return to.
                      </div>
                    </OverviewTitle>                    
                  </div>
                </Overview>
                <Example>
                  <div id="example">
                    Example
                    <GeneralExample>
                    npx prisma
                    </GeneralExample>

                    <GeneralExample>
                    npx prisma
                    </GeneralExample>

                    <GeneralExample>
                    npx prisma
                    </GeneralExample>
                    <GeneralExample>
                    npx prisma
                    </GeneralExample>
                    <GeneralExample>
                    npx prisma
                    </GeneralExample>
                    <GeneralExample>
                    npx prisma
                    </GeneralExample>
                    <GeneralExample>
                    npx prisma
                    </GeneralExample>
                    <GeneralExample>
                    npx prisma
                    </GeneralExample>
                    <GeneralExample>
                    npx prisma
                    </GeneralExample>
                    <GeneralExample>
                    npx prisma
                    </GeneralExample>
                  </div>
                </Example>
        </DetailsContainerContent>
        <RightMenu>
          In this article
          <ul>
              <ol> <a href='#title'> Description</a> </ol>
              <ol>  <a href='#overview'> Overview </a> </ol>
              <ol>  <a href='#example'> example </a> </ol>
          </ul>   
        </RightMenu>
        </DetailsContainer>
    </div>
  )
}

export default CorsDetails