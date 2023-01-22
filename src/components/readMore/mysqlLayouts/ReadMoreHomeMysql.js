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
 import ReadMoreLeft from '../mysqlLayouts/ReadMoreLeft'
 import ReadMoreContent from '../mysqlLayouts/ReadMoreContent'
 import ReadMoreRight from '../mysqlLayouts/ReadMoreRight'

const ReadMoreHomeMysql = (props) => {
  return (
    <div>
        <TopBar />
        <Breadcrumb bread={props.breadcrumbs.mysql} />
        <Container>
            <LeftMenu>
                   <LeftMTitle>
                       <LeftBarTitle leftbartitle={props.leftbartitle.mysqlTitle} />
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

export default ReadMoreHomeMysql
