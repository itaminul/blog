import React from 'react'
import TopBar from '../layouts/TopBar'
import Breadcrumbs from '../layouts/Breadcrumbs'
import LeftBarTitle from '../layouts/LeftBarTitle'
import StateDetails from './StateDetails'
import ReadMoreLeft from '../readMore/reactLayouts/ReadMoreLeft'
import {
    Container,
    DetailsContent,
    RightMenu,
    LeftMenu,
    LeftMTitle
} from '../javascript/Common.styled'

const State = (props) => {
  return (
   <>
   <TopBar />

   <Breadcrumbs 
        bread={props.breadcrumbs.state} />
    <Container>
        <LeftMenu>
        <LeftMTitle>
            <LeftBarTitle leftbartitle={props.leftbartitle.reactTitle} />
        </LeftMTitle>
         <ReadMoreLeft/>
    </LeftMenu>
        <DetailsContent>            
            <StateDetails />            
        </DetailsContent>
        {/* <RightMenu>      
            <JavascriptArticelList />       
        </RightMenu> */}
    </Container>
    
    
   </>
  )
}

export default State