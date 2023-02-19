import React from 'react'
import TopBar from '../layouts/TopBar'
import Breadcrumbs from '../layouts/Breadcrumbs'
import LeftBarTitle from '../layouts/LeftBarTitle'
import ErrorHandlingDetails from './ErrorHandlingDetails'
import ReadMoreLeft from '../readMore/expressjsLayouts/ReadMoreLeft'
import {
    Container,
    DetailsContent,
    RightMenu,
    LeftMenu,
    LeftMTitle
} from '../javascript/Common.styled'

const ErrorHandler = (props) => {
  return (
   <>
   <TopBar />

   <Breadcrumbs 
        bread={props.breadcrumbs.errorhandler} />
    <Container>
        <LeftMenu>
        <LeftMTitle>
                       <LeftBarTitle leftbartitle={props.leftbartitle.expressTitle} />
                    </LeftMTitle>
         <ReadMoreLeft/>
    </LeftMenu>
        <DetailsContent>            
            <ErrorHandlingDetails />            
        </DetailsContent>
        {/* <RightMenu>      
            <JavascriptArticelList />       
        </RightMenu> */}
    </Container>
    
    
   </>
  )
}

export default ErrorHandler