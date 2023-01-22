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
                    <LeftMTitle>
                       <LeftBarTitle leftbartitle={props.leftbartitle.phpTitle} />
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

export default ReadMoreHomePhp
