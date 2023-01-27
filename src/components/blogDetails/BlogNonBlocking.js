import React from 'react'
import TopBar from '../layouts/TopBar'
import Breadcrumbs from '../layouts/Breadcrumbs'
import RecentBlog from '../blog/RecentBlog'
import { HooksDetails } from '../../components/details/reactPost/HooksDetails'

import {
  Container,
 DetailsContent
 } from '../../components/details/ReactDetails.styled'

import {
  RecentPostContainer
} from '../../components/post/RecentPost.styled'

const BlogNonBlocking = (props) => {

  return (
    <>
    <TopBar />
    <Breadcrumbs bread={props.breadcrumbs.blognoneblocking} />
      <Container>
          <DetailsContent>            
              <HooksDetails />
          </DetailsContent>
          <RecentPostContainer>
            <RecentBlog />
          </RecentPostContainer>
      </Container>
</>
  )
}


export default BlogNonBlocking
