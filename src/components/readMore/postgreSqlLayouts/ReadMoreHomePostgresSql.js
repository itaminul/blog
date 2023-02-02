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
 } from '../../javascript/Common.styled'
 import ReadMoreLeft from '../postgreSqlLayouts/ReadMoreLeft'
 import ReadMoreContent from '../postgreSqlLayouts/ReadMoreContent'
 import ReadMoreRight from '../postgreSqlLayouts/ReadMoreRight'

const ReadMoreHomePostgresSql = (props) => {
  return (
    <div>
        <TopBar />
        <Breadcrumb bread={props.breadcrumbs.postgresql} />
        <Container>
            <LeftMenu>
                    <LeftMTitle>
                       <LeftBarTitle leftbartitle={props.leftbartitle.PostgreSQLTitle} />
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

export default ReadMoreHomePostgresSql
