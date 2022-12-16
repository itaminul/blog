import React from 'react'
import ScrollToTop from '../home/ScrollToTop'
import Service from '../home/Service'
import Portfolio from '../home/Portfolio'
import TopBar from '../layouts/TopBar'
import { HireMe } from '../home/Container.styled'
function Home(){

  return (
    <>
    <div>
    <TopBar />
    </div>
    <div style={{marginTop: "70px"}}>    
    <ScrollToTop />
    </div>
    <HireMe>Aminul is now available for hire</HireMe>
    <div style={{marginTop: "20px"}}>    
    <Service />
    <Portfolio />

    </div>
    </>
 
  )
}

export default Home
