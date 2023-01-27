import React from 'react'
import TopBar from '../../layouts/TopBar'
import Breadcrumbs from '../../layouts/Breadcrumbs'
import RecentBlog from '../../blog/RecentBlog'
import { HooksDetails } from './HooksDetails'
import {
  Container,
 DetailsContent
 } from '../ReactDetails.styled'

import {
  RecentPostContainer
} from '../../post/RecentPost.styled'


const Hooks = (props) => {
  return (
    <>
        <TopBar />
        <Breadcrumbs bread={props.breadcrumbs.hooks} />
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

export default Hooks
