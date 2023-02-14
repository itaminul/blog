import React from 'react'
import TopBar from '../layouts/TopBar'
import Breadcrumbs from '../layouts/Breadcrumbs'
import LeftBarTitle from '../layouts/LeftBarTitle'
import UseStateDetails from './UseStateDetails'
import ReadMoreLeft from '../readMore/reactLayouts/ReadMoreLeft'
import {
    Container,
    DetailsContent,
    RightMenu,
    LeftMenu,
    LeftMTitle
} from '../javascript/Common.styled'

const UseState = (props) => {
  return (
   <>
   <TopBar />

   <Breadcrumbs 
        bread={props.breadcrumbs.usestate} />
    <Container>
        <LeftMenu>
        <LeftMTitle>
          <LeftBarTitle leftbartitle={props.leftbartitle.reactTitle} />
       </LeftMTitle>
         <ReadMoreLeft/>
    </LeftMenu>
        <DetailsContent>            
            <UseStateDetails />            
        </DetailsContent>
        {/* <RightMenu>      
            <JavascriptArticelList />       
        </RightMenu> */}
    </Container>
    
    
   </>
  )
}

export default UseState