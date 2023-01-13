import React from 'react'
import TopBar from '../layouts/TopBar'
import Breadcrumbs from '../layouts/Breadcrumbs'
import LeftSide from './LeftSide'
import Content from './ReactPost'
import RecentPost from '../post/RecentPost'
import Footer from '../layouts/Footer'
import {
     Container,
     LeftMenu,
    LeftSideBar,
    DetailsContent
    } from './ReactDetails.styled'
import {
    RecentPostContainer
} from '../post/RecentPost.styled'

const ReactDetails = (props) => {
  return (
    <>
        <TopBar />
        <Breadcrumbs bread={props.breadcrumbs.react} />
        
        <Container>
            <LeftMenu>
                dddddd
            </LeftMenu>
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