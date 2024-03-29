
import React from 'react'
import TopBar from '../layouts/TopBar'
import LeftBarTitle from '../layouts/LeftBarTitle'
import InTheArticle from './InTheArticle'
import Breadcrumbs from '../layouts/Breadcrumbs'
import WhatisjavascriptDetails from './WhatisjavascriptDetails'
import JavascriptArticelList from './JavascriptArticelList'
import ReadMoreLeft from '../readMore/ReadMoreLeft'
import {
    Container,
    DetailsContent,
    RightMenu,
    LeftMenu,
    LeftMTitle
} from './Common.styled'
import JavaScriptDataTypeDetails from './JavaScriptDataTypeDetails'


const JavascriptScriptDataTypes = (props) => {
  return (
   <>
   <TopBar />

   <Breadcrumbs  bread={props.breadcrumbs.dataTypes} />
    <Container>
        <LeftMenu>
                   <LeftMTitle>
                       <LeftBarTitle leftbartitle={props.leftbartitle.javascriptTitle} />
                    </LeftMTitle>
         <ReadMoreLeft/>
        </LeftMenu>
        <DetailsContent>
            
            <JavaScriptDataTypeDetails />            
        </DetailsContent>
        {/* <RightMenu>      
            <JavascriptArticelList />       
        </RightMenu> */}
    </Container>
    
    
   </>
  )
}

export default JavascriptScriptDataTypes