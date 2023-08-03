import { Link } from "react-router-dom"
const FeaturedJobItem = ({feature}) => {
  const {id, companyLogo, jobTitle, companyName, location, salary, jobType, jobStatus} = feature;
  return (
    <div class="card card-compact">
    <div>
      <img
        className="w-[100px] h-[40px]"
        src={companyLogo}
        alt="google"
      />
    </div>
    <div className="space-y-2">
      <h2 className="font-extrabold text-2xl">{jobTitle}</h2>
      <p className="font-semibold text-[20px]">{companyName}</p>
      <button className="border-[1px] border-solid border-[#7E90FE] text-[#7E90FE] px-4 py-2 rounded-[3px] font-extrabold">{jobType}</button> <button className="border-[1px] border-solid border-[#7E90FE] text-[#7E90FE] px-4 py-2 rounded-[3px] font-extrabold">{jobStatus}</button>
      <p>
      <i class="fa-solid fa-location-dot text-[16px] mr-2"></i>
      <span className="font-semibold text-[20px]">{location}</span> 
      <br />
      <i class="fa-solid fa-magnifying-glass-dollar text-[16px] mr-2"></i>
      <span className="font-semibold text-[20px]"> Salary : {salary}</span>
      </p>
      <div class="card-actions">
        <Link to={`/job-details/${id}`}>
        <button class="bg-[#7E90FE] hover:bg-[#596dee] text-white px-[16px] py-[8px] rounded-[5px] font-extrabold text-[20px]">View Details</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default FeaturedJobItem