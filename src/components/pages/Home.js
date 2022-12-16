import React from 'react'
import ScrollToTop from '../home/ScrollToTop'
import Service from '../home/Service'
import Portfolio from '../home/Portfolio'
import TopBar from '../layouts/TopBar'
function Home(){

  return (
    <>
    <div>
    <TopBar />
    </div>
    <div style={{marginTop: "70px"}}>    
    <ScrollToTop />
    <Service />
    <Portfolio />

    </div>
    </>
 
  )
}

export default Home
