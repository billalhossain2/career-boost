import React from 'react'
import bannerImg from "../assets/All Images/banner.png";
const Banner = () => {
  return (
    <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row lg:gap-52">
      <div>
        <h1 class="text-5xl font-bold leading-[50px]">One Step <br/> Closer To Your <br/> <span className="text-[#7E90FE]">Dream Job</span> </h1>
        <p class="py-6">
        Explore thousands of job opportunities with all the <br/> information you need. Its your future. Come find it. Manage all <br/> your job application from start to finish.
        </p>
        <button class="btn bg-[#7E90FE] hover:bg-[#556af1] text-white">Get Started</button>
      </div>
      <img
        src={bannerImg}
        class="max-w-sm rounded-lg shadow-2xl"
      />
    </div>
  </div>
  )
}

export default Banner