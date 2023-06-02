import TopBar from "../layouts/TopBar";
import Breadcrumbs from "../layouts/Breadcrumbs";
import { 
    Container,
    DetailsContent,
    RightMenu
} from '../blog/BlogIndex.styled'
function ProjectIndex(props) {

    return(
        <>
        <TopBar />
        <Breadcrumbs  bread={props.breadcrumbs.projectIndex} />
          <Container>
              <DetailsContent>
                
                aaaaaaaaaaaaaaaa
              </DetailsContent>

              <RightMenu>
               ddddddddddddd
              </RightMenu>
          </Container>
      </>
    )
}

export default ProjectIndex;
