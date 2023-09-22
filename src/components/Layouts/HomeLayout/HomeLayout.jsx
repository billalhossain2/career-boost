import React from 'react'
import HomeHeader from '../../Pages/Home/HomeHeader'
import Footer from '../../Shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default HomeLayout