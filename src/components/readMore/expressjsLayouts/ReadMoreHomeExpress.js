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

 import ReadMoreLeft from '../expressjsLayouts/ReadMoreLeft'
 import ReadMoreContent from '../expressjsLayouts/ReadMoreContent'
 import ReadMoreRight from '../expressjsLayouts/ReadMoreRight'

const ReadMoreHomeExpress = (props) => {
  return (
    <div>
        <TopBar />
        <Breadcrumb bread={props.breadcrumbs.javascript} />
        <Container>
            <LeftMenu>
                    <LeftMTitle>
                       <LeftBarTitle leftbartitle={props.leftbartitle.expressTitle} />
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

export default ReadMoreHomeExpress
