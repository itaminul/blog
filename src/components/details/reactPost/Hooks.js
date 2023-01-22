import React from 'react'

import{ Link } from 'react-router-dom'
import TopBar from '../../layouts/TopBar'
import Breadcrumbs from '../../layouts/Breadcrumbs'
import RecentPost from '../../post/RecentPost'
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
