import React from 'react'
import Breadcrumb from '../../layouts/Breadcrumbs'
import TopBar from '../../layouts/TopBar'
import LeftBarTitle from '../../layouts/LeftBarTitle'

import {
    Container,
    LeftMenu,
    DetailsContent,
    RightMenu

 } from '../../readMore/reactLayouts/ReadMore.styled'
 import { 
    LeftMTitle
 } from '../../../components/javascript/Common.styled'

 import ReadMoreLeft from '../../readMore/nodejsLayouts/ReadMoreLeft'
 import ReadMoreContent from '../../readMore/nodejsLayouts/ReadMoreContent'
 import ReadMoreRight from '../../readMore/nodejsLayouts/ReadMoreRight'

const ReadMoreHomeNode = (props) => {
  return (
    <div>
        <TopBar />
        <Breadcrumb bread={props.breadcrumbs.javascript} />
        <Container>
            <LeftMenu>
                    <LeftMTitle>
                       <LeftBarTitle leftbartitle={props.leftbartitle.nodeTitle} />
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

export default ReadMoreHomeNode
