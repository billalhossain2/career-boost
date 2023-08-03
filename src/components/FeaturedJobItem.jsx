import { Link } from "react-router-dom"
const FeaturedJobItem = () => {
  return (
    <div class="card card-compact">
    <div>
      <img
        src="./src/assets/Logo/google.png"
        alt="google"
      />
    </div>
    <div className="space-y-2">
      <h2 className="font-extrabold text-2xl">Technical Database Engineer</h2>
      <p className="font-semibold text-[20px]">Google LLC</p>
      <button className="border-[1px] border-solid border-[#7E90FE] text-[#7E90FE] px-4 py-2 rounded-[3px] font-extrabold">Remote</button> <button className="border-[1px] border-solid border-[#7E90FE] text-[#7E90FE] px-4 py-2 rounded-[3px] font-extrabold">Full Time</button>
      <p>
      <i class="fa-solid fa-location-dot text-2xl"></i>
      <span className="font-semibold text-[20px]"> Dhaka, Bangladesh </span> 
      <i class="fa-solid fa-magnifying-glass-dollar text-2xl"></i>
      <span className="font-semibold text-[20px]"> Salary : 100K - 150K</span>
      </p>
      <div class="card-actions">
        <Link to="/job-details">
        <button class="bg-[#7E90FE] hover:bg-[#596dee] text-white px-[16px] py-[8px] rounded-[5px] font-extrabold text-[20px]">View Details</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default FeaturedJobItem