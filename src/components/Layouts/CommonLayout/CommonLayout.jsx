import React from 'react'
import CommonHeader from '../../Shared/CommonHeader/CommonHeader'
import Footer from '../../Shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

const CommonLayout = () => {
  return (
    <div>
      <CommonHeader></CommonHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default CommonLayout