import React from 'react'
import Breadcrumb from '../layouts/Breadcrumbs'
import TopBar from '../layouts/TopBar'
import LeftBarTitle from '../layouts/LeftBarTitle'

import {
    Container,
    LeftMenu,
    
    DetailsContent,
    RightMenu

 } from './ReadMore.styled'

 import { 
    LeftMTitle

 } from '../../components/javascript/Common.styled'

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
                 <LeftMTitle>
                       <LeftBarTitle leftbartitle={props.leftbartitle.javascriptTitle} />
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

export default ReadMore
