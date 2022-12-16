import React from 'react'
import Experience from '../portfolio/Experience'
import Portfolio from '../portfolio/Portfolio'
import ProfileSummary from './ProfileSummary'
import Service from '../portfolio/Service'
import TopBar from '../layouts/TopBar'
import { HireMe } from './Container.styled'
function PortfolioHome() {

  return (
    <>
      <div>
        <TopBar />
      </div>
      <div style={{ marginTop: "70px" }}>
        <ProfileSummary />
      </div>
      <HireMe>Aminul is now available for hire</HireMe>
      <div style={{ marginTop: "20px" }}>
        <Service />
        <Portfolio />
        <Experience />
      </div>
    </>

  )
}

export default PortfolioHome
