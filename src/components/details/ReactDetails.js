import React from 'react'
import TopBar from '../layouts/TopBar'
import LeftSide from './LeftSide'
import Content from './Content'
import RecentPost from '../post/RecentPost'

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
    </>
  )
}

export default ReactDetails