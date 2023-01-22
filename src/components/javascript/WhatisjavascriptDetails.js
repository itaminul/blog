
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

const br = '<br />'

const example = `
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
`
const WhatisjavascriptDetails = () => {
  return (
    <div>
        <DetailsContainer>
            <DetailsContainerContent>
                <Title>
                    <div id="title">
                    What is Prisma?
                     </div>                     
                     </Title>                 
                <Description>
                <div id="description">
                Prisma is an open source next-generation ORM. It consists of the following parts:
                <br />
                  Prisma Client: <br />
                  Auto-generated and type-safe query builder for Node.js & TypeScript
                  <br />
                  Prisma Migrate: 
                  <br />
                    Prisma Migrate is an imperative database schema migration tool that enables you to:

                    Keep your database schema in sync with your Prisma schema as it evolves and
                    Maintain existing data in your database
                    Prisma Migrate generates a history of .sql migration files, and plays a role in both development and deployment. 
                  <br />
                  Prisma Studio: 
                  <br />
                  GUI to view and edit data in your database.


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
                    {example}
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
              <ol> <a href='#title'> What is JavaScript? </a> </ol>
              <ol>  <a href='#overview'> Overview </a> </ol>
              <ol>  <a href='#example'> example </a> </ol>
          </ul>   
        </RightMenu>
        </DetailsContainer>
    </div>
  )
}

export default WhatisjavascriptDetails
