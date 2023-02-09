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

const tutorials = ["   Javascript ", "   React ", "   NodeJs ", " API ", " ReactJs ", " NodeJs ", " Express.js ", " Redux Toolkit ", " MongoDB "," Mongoose "," prisma.io "," PHP "," CodeIgniter ","MySQL","Oracle","PostgreSQL","Jquery","Ajax","CSS","Bootstrap"]
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
                        <Link to='/read-more' style={{textDecoration: 'none'}}>
                          <BlogImage>
                              <img src="./javascript.svg"  width="20%" />
                              <BlogImageTitle
                              style={{marginTop: "-40px"}}>JavaScript</BlogImageTitle>
                              </BlogImage>
                          </Link> 
                      </Blog>             
                  <Blog>      

                    <Link to='/read-more-react' style={{textDecoration: 'none'}}>
                          <BlogImage>
                              <img src="./react.svg"  width="20%" />
                              <BlogImageTitle
                              style={{marginTop: "-40px"}}>React</BlogImageTitle>
                              </BlogImage>
                          </Link>
                  </Blog>
                  <Blog>    

                    <Link to='/read-more-node' style={{textDecoration: 'none'}}>
                          <BlogImage>
                              <img src="./nodejs.png"  width="20%" />
                              <BlogImageTitle
                              style={{marginTop: "-50px"}}>NodeJs</BlogImageTitle>
                              </BlogImage>
                          </Link>  
                  </Blog>
                  <Blog>      

                    <Link to='/read-more-express' style={{textDecoration: 'none'}}>
                          <BlogImage>
                              <img src="./expressjs-logo.png"  width="20%" />
                              <BlogImageTitle
                              style={{marginTop: "-50px"}}>ExpressJs</BlogImageTitle>
                              </BlogImage>
                      </Link>   
                  </Blog>
                  <Blog>  

                    <Link to='/read-more-php' style={{textDecoration: 'none'}}>
                          <BlogImage>
                              <img src="./php-logo.png"  width="20%" />
                              <BlogImageTitle
                              style={{marginTop: "-50px"}}>PHP</BlogImageTitle>
                              </BlogImage>                      
                        </Link>   
                  </Blog>
                  <Blog> 
                  <Link to='/read-more-mysql' style={{textDecoration: 'none'}}>
                          <BlogImage>
                              <img src="./mysql (1).png"  width="20%" />
                              <BlogImageTitle
                              style={{marginTop: "-50px"}}>MySql</BlogImageTitle>
                              </BlogImage>
                          </Link>   
                  </Blog>
                  <Blog> 
                  <Link to='/read-more-mongodb' style={{textDecoration: 'none'}}>
                          <BlogImage>
                              <img src="./mongodb (1).png"  width="20%" />
                              <BlogImageTitle
                              style={{marginTop: "-50px"}}>Mongodb</BlogImageTitle>
                              </BlogImage>
                          </Link>
                  </Blog>
                  <Blog>      
                        <Link to='/read-more-post-gre-sql' style={{textDecoration: 'none'}}>
                          <BlogImage>
                              <img src="./postgresql.png"  width="20%" />
                              <BlogImageTitle
                              style={{marginTop: "-50px"}}>PostgreSQL</BlogImageTitle>
                              </BlogImage>
                          </Link>
                  </Blog>
                  <Blog>      
                        <Link to='/read-more-prisma' style={{textDecoration: 'none'}}>
                          <BlogImage>
                              <img src="./prisma2.svg"  width="20%" />
                              <BlogImageTitle
                              style={{marginTop: "-30px"}}>prisma.io</BlogImageTitle>
                              </BlogImage>
                          </Link>
                  </Blog>
                  <Blog>      
                        <Link to='/read-more-laravel' style={{textDecoration: 'none'}}>
                          <BlogImage>
                              <img src="./laravel-home.png"  width="20%" />
                              <BlogImageTitle
                              style={{marginTop: "-50px"}}>Laravel</BlogImageTitle>
                              </BlogImage>
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
             <ExpButton>prisma.io</ExpButton>
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
