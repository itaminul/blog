import React from 'react'
import TopBar from '../layouts/TopBar'
import SliderArea from './SliderArea'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'
import Footer from '../layouts/Footer'
import {
   Container, 
   BoxLeft,
   Blog,
   BlogTitle,
   BlogBox,
   SliderBox,
   ReadMore,
   ExplorAllTopic,
   ExplorSummary,
   ExpButton,
   BlogImage,
   BlogImageTitle
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
                <Link to='/read-more'>
                    <BlogImage>
                      <img src="./javascript.svg"  width="25%" />
                      <BlogImageTitle
                      style={{marginLeft: "20px",  
                      marginTop: "-50px",
                      textDecoration : "none"}}>JavaScript</BlogImageTitle>
                      </BlogImage>
                    
                      {/* <Link to='/read-more'>
                      <ReadMore>Read More</ReadMore>
                      </Link>            */}
                      </Link> 
                  </Blog>
             
              <Blog>              
                  <img src="./reactImage.png" width="35%" height="30%" />
                  <BlogTitle>Total Post - 50</BlogTitle>
                  <h2 style={{fontWeight: '300'}}>React</h2>                 
                  <Link to='/read-more-react'>
                  <ReadMore>Read More</ReadMore>
                  </Link>   
              </Blog>
              <Blog>              
                  <img src="./nodejs.png" width="35%" />
                  <BlogTitle>Total Post - 50</BlogTitle>
                  <h2 style={{fontWeight: '300'}}>NodeJS</h2>
                  <Link to='/read-more-node'>
                  <ReadMore>Read More</ReadMore>
                  </Link>   
              </Blog>
              <Blog>              
                  <img src="./express.png" width="35%" />
                  <BlogTitle>Total Post - 50</BlogTitle>
                  <h2 style={{fontWeight: '300'}}>Express.js</h2>                
                  <Link to='/read-more-express'>
                  <ReadMore>Read More</ReadMore>
                  </Link>   
              </Blog>
              <Blog>              
                    <img src="./php.png"  width="35%" />
                    <BlogTitle>Total Post - 50</BlogTitle>
                    <h2 style={{fontWeight: '300'}}>PHP</h2> 
                    <Link to='/read-more-php'>
                    <ReadMore>Read More</ReadMore>
                    </Link>   
              </Blog>
              <Blog>              
                    <img src="./mysql.png" width="35%" height="30%" />
                    <BlogTitle>Total Post - 50</BlogTitle>
                    <h2 style={{fontWeight: '300'}}>Mysql</h2>  
                    <Link to='/read-more-mysql'>
                    <ReadMore>Read More</ReadMore>
                    </Link>   
              </Blog>
              <Blog>              
                    <img src="./mongodb.jpeg"  width="35%" height="30%" />
                    <BlogTitle>Total Post - 50</BlogTitle>
                    <h2 style={{fontWeight: '300'}}>MongoDB</h2>    
                    <Link to='/read-more-mongodb'>
                    <ReadMore>Read More</ReadMore>
                    </Link>   
              </Blog>
              <Blog>              
                    <img src="./prisam.png" width="35%" height="30%" />
                    <BlogTitle>Total Post - 50</BlogTitle>
                    <h2 style={{fontWeight: '300'}}>Prisma</h2>    
                    <Link to='/read-more-prisma'>
                    <ReadMore>Read More</ReadMore>
                    </Link>   
              </Blog>
          </BlogBox>
        </BoxLeft>  
        <ExplorAllTopic>
        Explore all topics
        </ExplorAllTopic>
        <ExplorSummary>
             <ExpButton>API</ExpButton>
             <ExpButton>JavaScript</ExpButton>
             <ExpButton>ReactJs</ExpButton>
             <ExpButton>NodeJs</ExpButton>
             <ExpButton>Express.js</ExpButton>
             <ExpButton>Redux Toolkit</ExpButton>
             <ExpButton>MongoDB</ExpButton>
             <ExpButton>Mongoose</ExpButton>
             <ExpButton>Prisma ORM</ExpButton>
             <ExpButton>PHP</ExpButton>
             <ExpButton>CodeIgniter</ExpButton>
             <ExpButton>MySQL</ExpButton>
             <ExpButton>Oracle</ExpButton>
             <ExpButton>PostgreSQL</ExpButton>
             <ExpButton>Jquery</ExpButton>
             <ExpButton>Ajax</ExpButton>
             <ExpButton>CSS</ExpButton>
             <ExpButton>Bootstrap</ExpButton>
             <ExpButton>MUI</ExpButton>
             <ExpButton>styled-components</ExpButton>
             </ExplorSummary>
      </Container>
      <Footer />
    </>
  )
}

export default Home
