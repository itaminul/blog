
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
  OverviewTitle } from '../javascript/Common.styled';


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

const br = '<br />'

const example = `
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
`
const WhatisLaravelDetails = (props) => {
  return (
    <div>
        <DetailsContainer>
            <DetailsContainerContent>
                <Title>
                    <div id="title">
                    Laravel ?
                     </div>                     
                     </Title>                 
                <Description>
                <div id="description">
                The Prisma command line interface (CLI) is the primary way to interact with your Prisma project from the command line. It can initialize new project assets, generate Prisma Client, and analyze existing database structures through introspection to automatically create your application models.
                </div>
                </Description>
                <Overview>
                  <div id='overview'>
                    Overview
                    <OverviewTitle>
                      <div>
                      The Prisma schema has powerful data modeling features. For example, it allows you to define "Prisma-level" relation fields which will make it easier to work with relations in the Prisma Client API. In the case above, the posts field on User is defined only on "Prisma-level", meaning it does not manifest as a foreign key in the underlying database.
                      </div>
                    </OverviewTitle>                    
                  </div>
                </Overview>
                <Example>
                  <div id="example">
                    Example
                    <GeneralExample>
                    npx prisma
                    {/* <div {{ __html: showExample }}></div> */}
                    {/* <div dangerouslySetInnerHTML={{__html: html}}></div> */}
                    {/* <div dangerouslySetInnerHTML={{ __html: "<p>some data </p>" }} /> */}

                   {/* {parse(showExample)} */}
                    </GeneralExample>
                  </div>
                </Example>
        </DetailsContainerContent>
        <RightMenu>
          In this article
          <ul>
              <ol> <a href='#title'> Description </a> </ol>
              <ol>  <a href='#overview'> Overview </a> </ol>
              <ol>  <a href='#example'> example </a> </ol>
          </ul>   
        </RightMenu>
        </DetailsContainer>
    </div>
  )
}

export default WhatisLaravelDetails
