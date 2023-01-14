import React from 'react'
import TopBar from '../layouts/TopBar'
import InTheArticle from './InTheArticle'
import Breadcrumbs from '../layouts/Breadcrumbs'
import WhatisjavascriptDetails from './WhatisjavascriptDetails'
import JavascriptArticelList from './JavascriptArticelList'
import {
    Container,
    DetailsContent,
    RightMenu
} from './Common.styled'
const WhatIsJavascript = (props) => {
  return (
    <>
       <TopBar />
        <Breadcrumbs 
        bread={props.breadcrumbs.whatisjavascript} />
    <Container>
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

export default WhatIsJavascript
