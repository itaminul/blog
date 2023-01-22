import React from 'react'
import Breadcrumb from '../../layouts/Breadcrumbs'
import TopBar from '../../layouts/TopBar'
import {
    Container,
    LeftMenu,
    DetailsContent,
    RightMenu

 } from '../reactLayouts/ReadMore.styled'

 import { 
    LeftMTitle
 } from '../../../components/javascript/Common.styled'

 import ReadMoreLeft from '../reactLayouts/ReadMoreLeft'
 import ReadMoreContent from '../reactLayouts/ReadMoreContent'
 import ReadMoreRight from '../reactLayouts/ReadMoreRight'
import LeftBarTitle from '../../layouts/LeftBarTitle'
const ReadMoreHomeReact = (props) => {
  return (
    <div>
        <TopBar />
        <Breadcrumb bread={props.breadcrumbs.javascript} />
        <Container>
            <LeftMenu>
                    <LeftMTitle>
                       <LeftBarTitle leftbartitle={props.leftbartitle.reactTitle} />
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

export default ReadMoreHomeReact
