import React from 'react'
import { BreadcrumbsContainer } from './Breadcrumbs.styled'
const Breadcrumbs = (props) => {
  return (
   <>
     <BreadcrumbsContainer>
       {props.bread}       
        </BreadcrumbsContainer>
   </>
  )
}

export default Breadcrumbs