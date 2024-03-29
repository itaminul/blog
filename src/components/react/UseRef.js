import React from 'react'
import TopBar from '../layouts/TopBar'
import Breadcrumbs from '../layouts/Breadcrumbs'
import LeftBarTitle from '../layouts/LeftBarTitle'
import UseRefDetails from './UseRefDetails'
import ReadMoreLeft from '../readMore/reactLayouts/ReadMoreLeft'
import {
    Container,
    DetailsContent,
    RightMenu,
    LeftMenu,
    LeftMTitle
} from '../javascript/Common.styled'

const UseRef = (props) => {
  return (
   <>
   <TopBar />

   <Breadcrumbs 
        bread={props.breadcrumbs.useref} />
    <Container>
        <LeftMenu>
        <LeftMTitle>
            <LeftBarTitle leftbartitle={props.leftbartitle.reactTitle} />
        </LeftMTitle>
         <ReadMoreLeft/>
    </LeftMenu>
        <DetailsContent>            
            <UseRefDetails />            
        </DetailsContent>
        {/* <RightMenu>      
            <JavascriptArticelList />       
        </RightMenu> */}
    </Container>
    
    
   </>
  )
}

export default UseRef