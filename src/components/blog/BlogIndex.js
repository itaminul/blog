import React from 'react'
import TopBar from '../layouts/TopBar'
import BlogList from './BlogList'
import RecentBlog from './RecentBlog'
import Breadcrumbs from '../layouts/Breadcrumbs'
import {
  Container,
  DetailsContent,
  RightMenu
} from './BlogIndex.styled'

const BlogIndex = (props) => {
  return (
    <>
      <TopBar />
      <Breadcrumbs  bread={props.breadcrumbs.blog} />
        <Container>
            <DetailsContent>
               <BlogList />
            </DetailsContent>
            <RightMenu>
              <RecentBlog />
            </RightMenu>

        </Container>
    </>
  )
}

export default BlogIndex
