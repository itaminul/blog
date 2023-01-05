import React from 'react'

import{ Link } from 'react-router-dom'
import TopBar from '../../layouts/TopBar'
import RecentPost from '../../post/RecentPost'
import Content from '../../post/RecentPost'
import { HooksDetails } from './HooksDetails'
import {
  Container,
 DetailsContent
 } from '../ReactDetails.styled'

import {
  RecentPostContainer
} from '../../post/RecentPost.styled'

const Hooks = () => {
  return (
    <>
        <TopBar />
          <Container>
              <DetailsContent>
                  <HooksDetails />
              </DetailsContent>
              <RecentPostContainer>
                <RecentPost />
              </RecentPostContainer>
          </Container>
    </>
  )
}

export default Hooks
