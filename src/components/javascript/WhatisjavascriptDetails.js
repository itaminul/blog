
import React, { useEffect, useState } from 'react'
import JavascriptArticelList from './JavascriptArticelList'
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
} from './Common.styled'


const showExample = `
<html>
<div>
  <p>The <strong>rat</strong> hates the <strong>cat</strong></p>
  <p><i>This is something special</i></p>
  <div>
    <img src="https://www.kindacode.com/wp-content/uploads/2021/06/cute-dog.jpeg"/>
  </div>
  <h1>H1</h1>
  <h2>H2</h2>
  <h3>H3</h3>
  <h4>Just Another Heading</h4>
</div>
</html>
`; 


const WhatisjavascriptDetails = () => {
  return (
    <div>
        <DetailsContainer>
            <DetailsContainerContent>
                <Title>
                    <div id="title">
                     What is javascript? 
                     </div>
                     
                     </Title>                 
                <Description>
                <div id="description">
                              JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.). There are also more advanced server side versions of JavaScript such as Node.js, which allow you to add more functionality to a website than downloading files (such as 
                              realtime collaboration between multiple computers). Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.

              JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:
                </div>
                </Description>
                <Overview>
                  <div id='overview'>
                    Overview
                    <OverviewTitle>
                      <div>
                      To define a variable in JavaScript, you use var keyword. For example:
                      </div>
                    </OverviewTitle>
                    <GeneralExample>
                    var x = 10;
                    </GeneralExample>
                    <GeneralExample>
                    var y = 20;
                    </GeneralExample>

                    <OverviewTitle>
                      <div>
                      ES6 added a new way to declare a variable with the let keyword:
                      </div>
                    </OverviewTitle>
                    <GeneralExample>
                    const x = 10;
                    </GeneralExample>
                    <GeneralExample>
                    let = 20;
                    </GeneralExample>
                  </div>
                </Overview>
                <Example>
                  <div id="example">
                    Example
                    <GeneralExample>
                    {/* <div {{ __html: showExample }}></div> */}
                    {/* <div dangerouslySetInnerHTML={{__html: html}}></div> */}
                    <div dangerouslySetInnerHTML={{ __html: "<p>some data </p>" }} />

                   {/* {parse(showExample)} */}
                    </GeneralExample>
                  </div>
                </Example>
        </DetailsContainerContent>
        <RightMenu>
          In this article
          <ul>
              <ol> <a href='#title'> What is JavaScript? </a> </ol>
              <ol>  <a href='#overview'> Overview </a> </ol>
              <ol>  <a href='#example'> example </a> </ol>
              <ol>  <a href='#example'> example </a> </ol>
          </ul>   
        </RightMenu>
        </DetailsContainer>
    </div>
  )
}

export default WhatisjavascriptDetails
