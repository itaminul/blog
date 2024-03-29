import React from 'react'
import TopBar from '../layouts/TopBar'
import LeftBarTitle from '../layouts/LeftBarTitle'
import InTheArticle from './InTheArticle'
import Breadcrumbs from '../layouts/Breadcrumbs'
import WhatisjavascriptDetails from './WhatisjavascriptDetails'
import ReadMoreLeft from '../readMore/ReadMoreLeft'
import {
    Container,
    DetailsContent,
    RightMenu,
    LeftMenu,
    LeftMTitle
} from './Common.styled'
const WhatIsJavascript = (props) => {
  return (
    <>
       <TopBar />
        <Breadcrumbs 
        bread={props.breadcrumbs.whatisjavascript} />
       <Container>
        <LeftMenu>
                    <LeftMTitle>
                       <LeftBarTitle leftbartitle={props.leftbartitle.javascriptTitle} />
                    </LeftMTitle>
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

export default WhatIsJavascript
