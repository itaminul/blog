import React from 'react'
import TopBar from '../layouts/TopBar'
import SliderArea from './SliderArea'
import SearchBox from './SearchBox'

import {
   Container, 
   BoxLeft,
   BoxRight,
   Blog,
   BlogTitle,
   BlogBox,
   SliderBox,
   ReadMore,
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
                <img src="./reactImage.png" />
              <BlogTitle>Total Post - 50</BlogTitle>
              <h2>Learn React</h2>
              <ReadMore>Read More</ReadMore>
              </Blog>
              
              <Blog>
              
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd

              </Blog>


              <Blog>
              
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd

              </Blog>

              <Blog>
              
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd
            ddddddddddddddddddddd

              </Blog>

          </BlogBox>

        </BoxLeft>        
   
      </Container>
      
    </>

  )
}

export default Home
