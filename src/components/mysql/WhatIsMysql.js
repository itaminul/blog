import React from 'react'
import TopBar from '../layouts/TopBar'
import Breadcrumbs from '../layouts/Breadcrumbs'
import LeftBarTitle from '../layouts/LeftBarTitle'
import WhatisjavascriptDetails from '../javascript/WhatisjavascriptDetails'
import ReadMoreLeft from '../readMore/mysqlLayouts/ReadMoreLeft'
import {
    Container,
    DetailsContent,
    RightMenu,
    LeftMenu,
    LeftMTitle
} from '../javascript/Common.styled'

const WhatIsMysql = (props) => {
  return (
   <>
   <TopBar />

   <Breadcrumbs 
        bread={props.breadcrumbs.whatismysql} />
    <Container>
        <LeftMenu>
        <LeftMTitle>
          <LeftBarTitle leftbartitle={props.leftbartitle.mysqlTitle} />
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

export default WhatIsMysql