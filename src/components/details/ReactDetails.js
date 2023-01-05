import React from 'react'
import TopBar from '../layouts/TopBar'
import LeftSide from './LeftSide'
import Content from './ReactPost'
import RecentPost from '../post/RecentPost'
import Footer from '../layouts/Footer'
import {
     Container,
    LeftSideBar,
    DetailsContent
    } from './ReactDetails.styled'
import {
    RecentPostContainer
} from '../post/RecentPost.styled'

const ReactDetails = () => {
  return (
    <>
        <TopBar />
        <Container>
            <DetailsContent>
                <Content />
            </DetailsContent>

            <RecentPostContainer>
               <RecentPost />
            </RecentPostContainer>
        </Container>
        <Footer />
       
    </>
  )
}

export default ReactDetails