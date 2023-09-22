import React from 'react'
import Navbar from '../../Shared/Navbar/Navbar'
import HomeBanner from './HomeBanner'

const HomeHeader = () => {
  return (
    <div>
        <Navbar></Navbar>
        <HomeBanner></HomeBanner>
    </div>
  )
}

export default HomeHeader