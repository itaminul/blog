import React from 'react'
import SideBar from '../layouts/SideBar'
//import { useSelector } from 'react-redux'

function Home(){
  // const open = useSelector((state) => state.SideBar.open);
  return (
    <>
  
      <nav>
       <SideBar />
      </nav>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
    </>
 
  )
}

export default Home
