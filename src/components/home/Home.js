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
   SliderBox
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
              <h2>Total Post - 50</h2>
              
          <h2>Learn React</h2>

            <h4>Total Post (50)</h4>

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
