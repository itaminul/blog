import React from 'react'
import TopBar from '../layouts/TopBar'
import Breadcrumbs from '../layouts/Breadcrumbs'
import LeftBarTitle from '../layouts/LeftBarTitle'
import WhatisjavascriptDetails from '../javascript/WhatisjavascriptDetails'
import ReadMoreLeft from '../readMore/prismaLayouts/ReadMoreLeft'
import {
    Container,
    DetailsContent,
    RightMenu,
    LeftMenu,
    LeftMTitle
} from '../javascript/Common.styled'

const WhatIsPrisma = (props) => {
  return (
   <>
   <TopBar />

   <Breadcrumbs 
        bread={props.breadcrumbs.whatisprisma} />
    <Container>
        <LeftMenu>
        <LeftMTitle>
          <LeftBarTitle leftbartitle={props.leftbartitle.prismaTitle} />
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

export default WhatIsPrisma