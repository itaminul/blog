import React from 'react'
import Breadcrumb from '../../layouts/Breadcrumbs'
import TopBar from '../../layouts/TopBar'
import LeftBarTitle from '../../layouts/LeftBarTitle'

import {
    Container,
    LeftMenu,
    DetailsContent,
    RightMenu

 } from '../reactLayouts/ReadMore.styled'

 import {
    LeftMTitle
 } from '../../../components/javascript/Common.styled'

 import ReadMoreLeft from '../prismaLayouts/ReadMoreLeft'
 import ReadMoreContent from '../prismaLayouts/ReadMoreContent'
 import ReadMoreRight from '../prismaLayouts/ReadMoreRight'

const ReadMoreHomePrisma = (props) => {
  return (
    <div>
        <TopBar />
        <Breadcrumb bread={props.breadcrumbs.javascript} />
        <Container>
            <LeftMenu>
                    <LeftMTitle>
                       <LeftBarTitle leftbartitle={props.leftbartitle.prismaTitle} />
                    </LeftMTitle>
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
