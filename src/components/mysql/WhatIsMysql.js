import React from 'react'
import TopBar from '../layouts/TopBar'
import Breadcrumbs from '../layouts/Breadcrumbs'
import WhatisjavascriptDetails from '../javascript/WhatisjavascriptDetails'
import ReadMoreLeft from '../readMore/mysqlLayouts/ReadMoreLeft'
import {
    Container,
    DetailsContent,
    RightMenu,
    LeftMenu
} from '../javascript/Common.styled'

const WhatIsMysql = (props) => {
  return (
   <>
   <TopBar />

   <Breadcrumbs 
        bread={props.breadcrumbs.arrowFunction} />
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

export default WhatIsMysql