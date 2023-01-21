import React from 'react'
import Breadcrumb from '../../layouts/Breadcrumbs'
import TopBar from '../../layouts/TopBar'
import {
    Container,
    LeftMenu,
    DetailsContent,
    RightMenu

 } from '../reactLayouts/ReadMore.styled'

 import ReadMoreLeft from '../phpLayouts/ReadMoreLeft'
 import ReadMoreContent from '../phpLayouts/ReadMoreContent'
 import ReadMoreRight from '../phpLayouts/ReadMoreRight'

const ReadMoreHomePhp = (props) => {
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

export default ReadMoreHomePhp
