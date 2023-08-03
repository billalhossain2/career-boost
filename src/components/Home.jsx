import React from 'react'
import CategoryList from './CategoryList'
import FeaturedJobs from './FeaturedJobs'
import Banner from './Banner'
const Home = () => {
  return (
    <>
    <Banner/>
    <CategoryList />
    <FeaturedJobs/>
    </>
  )
}

export default Home