import React from 'react'
import Breadcrumb from '../layouts/Breadcrumbs'
import TopBar from '../layouts/TopBar'
import {
    Container,
    LeftMenu,
    DetailsContent,
    RightMenu

 } from './ReadMore.styled'

 import ReadMoreLeft from './ReadMoreLeft'
 import ReadMoreContent from './ReadMoreContent'
 import ReadMoreRight from './ReadMoreRight'

const ReadMore = (props) => {
  return (
    <div>
        <TopBar />
        <Breadcrumb bread={props.breadcrumbs.javascript} />
        <Container>
            <LeftMenu>
               <ReadMoreLeft />
            </LeftMenu>
            <DetailsContent>
                <ReadMoreContent />
            </DetailsContent>
            <RightMenu>
                <ReadMoreRight />
            </RightMenu>

        </Container>
      
    </div>
  )
}

export default ReadMore
