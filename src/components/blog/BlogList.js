import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Details,
    DetailsTitle,
    DetailsDescription
} from './BlogList.styled'
const BlogList = () => {
  return (
    <div>
        <Container>
    <Details>
      <DetailsTitle>
        What is Hooks ?
      </DetailsTitle>
      <DetailsDescription>
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes....<Link to="/hooks">Details</Link>
      </DetailsDescription>
    </Details>

    <Details>
      <DetailsTitle>
        What is useState ?
      </DetailsTitle>

      <DetailsDescription>
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes....<Link to="/blog-use-state">Details</Link>
      </DetailsDescription>
    </Details>

    <Details>
      <DetailsTitle>
        What is useCallback ?
      </DetailsTitle>

      <DetailsDescription>
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes....<Link to="/blog-call-back">Details</Link>
      </DetailsDescription>
    </Details>

    <Details>
      <DetailsTitle>
        What is useMemo ?
      </DetailsTitle>

      <DetailsDescription>
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes....<Link to="/blog-use-memo">Details</Link>
      </DetailsDescription>
    </Details>

    <Details>
      <DetailsTitle>
        What is Arrow Function ?
      </DetailsTitle>

      <DetailsDescription>
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes....<Link to="/blog-arrow-function">Details</Link>
      </DetailsDescription>
    </Details>

    <Details>
      <DetailsTitle>
        What is Promise ?
      </DetailsTitle>

      <DetailsDescription>
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes....<Link to="/blog-promise">Details</Link>
      </DetailsDescription>
    </Details>

    <Details>
      <DetailsTitle>
        What is Prisma Client ?
      </DetailsTitle>

      <DetailsDescription>
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes....<Link to="/blog-prisma-client">Details</Link>
      </DetailsDescription>
    </Details>

    <Details>
      <DetailsTitle>
        What is Blocking ?
      </DetailsTitle>

      <DetailsDescription>
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes....<Link to="/blog-blocking">Details</Link>
      </DetailsDescription>
    </Details>

    <Details>
      <DetailsTitle>
        What is Nonblocking?
      </DetailsTitle>

      <DetailsDescription>
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes....<Link to="/blog-non-blocking">Details</Link>
      </DetailsDescription>
    </Details>

    <Details>
      <DetailsTitle>
        What is Hooks?
      </DetailsTitle>

      <DetailsDescription>
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes....<Link to="/blog-hooks">Details</Link>
      </DetailsDescription>
    </Details>

   </Container>   
      
    </div>
  )
}

export default BlogList
