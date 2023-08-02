import React from "react";
import bannerImg from "../assets/All Images/banner.png";
const Header = () => {
  return (
    <header className="max-w-[80%] mx-auto">
      {/* Navbar  */}
      <nav className="flex justify-between items-center mt-16 mb-10">
        <div className="font-extrabold text-[32px]">
          <h1>CareerBooster</h1>
        </div>
        <ul className="flex gap-10">
          <li className="hover:text-[#6172e4]">
            <a href="">Statistics</a>
          </li>
          <li className="hover:text-[#6172e4]">
            <a href="">Applied Jobs</a>
          </li>
          <li className="hover:text-[#6172e4]">
            <a href="">Blog</a>
          </li>
        </ul>
        <button className="btn bg-[#7E90FE] text-white hover:bg-[#6172e4]">
          Start Applying
        </button>
      </nav>
      {/* banner  */}
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
    </header>
  );
};

export default Header;
