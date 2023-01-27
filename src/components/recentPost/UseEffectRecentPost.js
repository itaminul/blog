import React from 'react'
import TopBar from '../layouts/TopBar'
import RecentBlog from '../blog/RecentBlog'
import Breadcrumbs from '../layouts/Breadcrumbs'

import {
  Container,
  DetailsContent,
  RightMenu
} from '../blog/BlogIndex.styled'

const UseEffectRecentPost = (props) => {
  return (
    <>
    <TopBar />
      <Breadcrumbs  bread={props.breadcrumbs.recentuseeffect} />
        <Container>
            <DetailsContent>
              ddddd
               {/* <BlogList /> */}
            </DetailsContent>
            <RightMenu>
              <RecentBlog />
            </RightMenu>
        </Container>
    </>
  )
}

export default UseEffectRecentPost
