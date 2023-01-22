import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Details,
  DetailsTitle,
  DetailsDescription,
} from './ReadMoreContent.styled'
const ReadMoreContent = () => {
  return (
    <>
   <Container>
    <Details>
      <DetailsTitle>
      What is Prisma?
      </DetailsTitle>
      <DetailsDescription>
      Prisma is an open source next-generation ORM. It consists of the following parts:
   
      </DetailsDescription>
      <DetailsTitle>
        Prisma Client: 
      </DetailsTitle>
      <DetailsDescription>
      Auto-generated and type-safe query builder for Node.js & TypeScript
      </DetailsDescription>
      <DetailsTitle>
        Prisma Migrate: 
        </DetailsTitle>
        <DetailsDescription>
        Prisma Migrate is an imperative database schema migration tool that enables you to:

        Keep your database schema in sync with your Prisma schema as it evolves and
        Maintain existing data in your database
        Prisma Migrate generates a history of .sql migration files, and plays a role in both development and deployment. 
        </DetailsDescription>
        <DetailsTitle>
          Prisma Studio: 
          </DetailsTitle>
          <DetailsDescription>
          GUI to view and edit data in your database.
          </DetailsDescription>
    </Details>   

   </Container>    
   </>
  )
}

export default ReadMoreContent
