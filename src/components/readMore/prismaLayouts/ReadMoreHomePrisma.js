import React from 'react'
import Breadcrumb from '../../layouts/Breadcrumbs'
import TopBar from '../../layouts/TopBar'
import {
    Container,
    LeftMenu,
    DetailsContent,
    RightMenu

 } from '../reactLayouts/ReadMore.styled'

 import ReadMoreLeft from '../reactLayouts/ReadMoreLeft'
 import ReadMoreContent from '../reactLayouts/ReadMoreContent'
 import ReadMoreRight from '../reactLayouts/ReadMoreRight'

const ReadMoreHomePrisma = (props) => {
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

export default ReadMoreHomePrisma
