import React from 'react'
import TopBar from '../layouts/TopBar'
import SliderArea from './SliderArea'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
   Container, 
   BoxLeft,
   BoxRight,
   Blog,
   BlogTitle,
   BlogBox,
   SliderBox,
   ReadMore,
   List
   } from '../home/Home.styled'

//https://www.npmjs.com/package/react-awesome-watermark

const tutorials = ["   Javascript ", "   React ", "   NodeJs "];

function Home() {
  return (
    <>
      <SliderBox>

        <SliderArea items={tutorials} />
        <SearchBox />
      
      </SliderBox> 
     <Container>  
      <div>
        <TopBar />
      </div>      
        <BoxLeft>
          <BlogBox>
              <Blog>
                    <img src="./reactImage.png" 
                    width="35%"
                    />
                  <BlogTitle>Total Post - 50</BlogTitle>
                  <h2 style={{fontWeight: '300'}}>Learn React</h2>
                  <List>Learning Tips</List>
                  <List>Front-End Library</List>
                  <List>Very First</List>
                  <List>Component Based</List>

                  <Link to='/react-details'>
                  <ReadMore>Read More</ReadMore>
                  </Link>           
              </Blog>
              <Blog>              
                  <img src="./reactImage.png" 
                    width="35%"
                    />
                  <BlogTitle>Total Post - 50</BlogTitle>
                  <h2 style={{fontWeight: '300'}}>Learn React</h2>
                  <List>Learning Tips</List>
                  <List>Front-End Library</List>
                  <List>Very First</List>
                  <List>Component Based</List>

                  <Link to='/react-details'>
                  <ReadMore>Read More</ReadMore>
                  </Link>   
              </Blog>
              <Blog>              
                  <img src="./reactImage.png" 
                    width="35%"
                    />
                  <BlogTitle>Total Post - 50</BlogTitle>
                  <h2 style={{fontWeight: '300'}}>Learn React</h2>
                  <List>Learning Tips</List>
                  <List>Front-End Library</List>
                  <List>Very First</List>
                  <List>Component Based</List>

                  <Link to='/react-details'>
                  <ReadMore>Read More</ReadMore>
                  </Link>   
              </Blog>
              <Blog>              
                  <img src="./reactImage.png" 
                    width="35%"
                    />
                  <BlogTitle>Total Post - 50</BlogTitle>
                  <h2 style={{fontWeight: '300'}}>Learn React</h2>
                  <List>Learning Tips</List>
                  <List>Front-End Library</List>
                  <List>Very First</List>
                  <List>Component Based</List>

                  <Link to='/react-details'>
                  <ReadMore>Read More</ReadMore>
                  </Link>   
              </Blog>
              <Blog>              
              <img src="./reactImage.png" 
                width="35%"
                />
              <BlogTitle>Total Post - 50</BlogTitle>
              <h2 style={{fontWeight: '300'}}>Learn React</h2>
              <List>Learning Tips</List>
              <List>Front-End Library</List>
              <List>Very First</List>
              <List>Component Based</List>

              <Link to='/react-details'>
              <ReadMore>Read More</ReadMore>
              </Link>   
              </Blog>
              <Blog>              
              <img src="./reactImage.png" 
                width="35%"
                />
              <BlogTitle>Total Post - 50</BlogTitle>
              <h2 style={{fontWeight: '300'}}>Learn React</h2>
              <List>Learning Tips</List>
              <List>Front-End Library</List>
              <List>Very First</List>
              <List>Component Based</List>

              <Link to='/react-details'>
              <ReadMore>Read More</ReadMore>
              </Link>   
              </Blog>
              <Blog>              
              <img src="./reactImage.png" 
                width="35%"
                />
              <BlogTitle>Total Post - 50</BlogTitle>
              <h2 style={{fontWeight: '300'}}>Learn React</h2>
              <List>Learning Tips</List>
              <List>Front-End Library</List>
              <List>Very First</List>
              <List>Component Based</List>

              <Link to='/react-details'>
              <ReadMore>Read More</ReadMore>
              </Link>   
              </Blog>
              <Blog>              
              <img src="./reactImage.png" 
                width="35%"
                />
              <BlogTitle>Total Post - 50</BlogTitle>
              <h2 style={{fontWeight: '300'}}>Learn React</h2>
              <List>Learning Tips</List>
              <List>Front-End Library</List>
              <List>Very First</List>
              <List>Component Based</List>

              <Link to='/react-details'>
              <ReadMore>Read More</ReadMore>
              </Link>   
              </Blog>
          </BlogBox>
        </BoxLeft>      
   
      </Container>
      
    </>

  )
}

export default Home
