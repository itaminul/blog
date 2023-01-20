import React from 'react'
import TopBar from '../layouts/TopBar'
import InTheArticle from './InTheArticle'
import Breadcrumbs from '../layouts/Breadcrumbs'
import WhatisjavascriptDetails from './WhatisjavascriptDetails'
import JavascriptArticelList from './JavascriptArticelList'
import ReadMoreLeft from '../readMore/ReadMoreLeft'
import {
    Container,
    DetailsContent,
    RightMenu,
    LeftMenu
} from './Common.styled'
const DefaultParameter = (props) => {
  return (
   <>
   <TopBar />

   <Breadcrumbs 
        bread={props.breadcrumbs.whatisjavascript} />
    <Container>
        <LeftMenu>
         <ReadMoreLeft/>
    </LeftMenu>
        <DetailsContent>
            
            <WhatisjavascriptDetails />            
        </DetailsContent>
        {/* <RightMenu>      
            <JavascriptArticelList />       
        </RightMenu> */}
    </Container>
    
    
   </>
  )
}

export default DefaultParameter