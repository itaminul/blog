import TopBar from "../layouts/TopBar";
import Breadcrumbs from "../layouts/Breadcrumbs";


import LeftBarTitle from '../layouts/LeftBarTitle'
import RecentBlog from '../blog/RecentBlog'
import {
    Container,
    LeftMenu,
    
    DetailsContent,
    RightMenu

 } from '../readMore/ReadMore.styled'

 import { 
    LeftMTitle

 } from '../../components/javascript/Common.styled'

 import ReadMoreLeft from '../readMore/ReadMoreLeft'
 import ReadMoreContent from '../readMore/ReadMoreContent'
 import ReadMoreRight from '../readMore/ReadMoreRight'
import ProjectList from "./ProjectList";

 
function ProjectIndex(props) {

    return(
        <>
        <TopBar />
        <Breadcrumbs  bread={props.breadcrumbs.projectIndex} />
        <Container>
            <LeftMenu>
                 <LeftMTitle>
                       <LeftBarTitle leftbartitle={props.breadcrumbs.projectIndex} />
                    </LeftMTitle>
              <ProjectList />
            </LeftMenu>
            <DetailsContent>
                <ReadMoreContent />
            </DetailsContent>
        </Container>
      </>
    )
}

export default ProjectIndex;
