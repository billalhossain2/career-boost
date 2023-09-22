import { useEffect, useState } from "react";
import getAppliedJobsIds from "../../../utilitis/getAppliedJobsIds"
import AppliedJobItem from "./AppliedJobItem";
import useTitle from "../../../Hooks/useTitle";
const AppliedJobs = () => {
  useTitle("Applied Jobs")
 const appliedJobsIds = getAppliedJobsIds();
 const [jobsApplied, setJobsApplied] = useState([])
 const [filterStatus, setFilterStatus] = useState('All')
 const [searchedTxt, setSearchedTxt] = useState("")

 useEffect(()=>{
  fetch('../../jobs.json')
  .then(res => res.json())
  .then(data => {
    const allJobs = data.features;
    const applied = allJobs.filter(job => appliedJobsIds.includes(job.id))
    setJobsApplied(applied)
  })
 }, [])

 const handleFilter = (ev)=>{
  const filteredTxt = ev.target.value;
  setFilterStatus(filteredTxt)
 }

 const handleSearch = (ev)=>{
  ev.preventDefault()
 const form = ev.target;
 const typedTxt =  form.search.value;
 setSearchedTxt(typedTxt)
 }

  return (
    <div className='max-w-[90%] mx-auto mb-32'>
      <h1 className='font-extrabold text-3xl py-10 text-center mb-20'>Applied Jobs</h1>
      {
        !jobsApplied.length && <h1 className="text-center font-bold text-xl text-red-300">You didn't apply to any job yet !</h1>
      }
      <div className="flex justify-end gap-3">
      {/* Search by job title  */}
      <div className='mb-8 flex justify-end font-semibold text-[20px]'>
        <form action="" onSubmit={handleSearch}>
        <input className="px-5 py-2 border-[2px] border-solid border-[#6172e4] rounded-md outline-none" type="search" name="search" id="search" placeholder="search"/>
        </form>
      </div>
      <div className='mb-8 flex justify-end font-semibold text-[20px]'>
        <select className="px-5 py-2 border-2 border-solid border-[#6172e4] rounded-md outline-none" name="" id="" onChange={handleFilter}>
          <option defaultValue="All">All</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
          {/* <option value="Part Time">Part Time</option>
          <option value="Full Time">Full Time</option> */}
        </select>
      </div>
      </div>
      <div className="applied-jobs-container space-y-10">
        {
          jobsApplied
          .filter(jobItem => {
            if(filterStatus === jobItem.jobType){
              return jobItem;
            }else if(filterStatus === 'All'){
              return jobItem;
            }
          })
          .filter(job => {
            if(job.jobTitle.toLowerCase() === searchedTxt.toLowerCase()){
              return job;
            }else if(searchedTxt === ""){
              return job;
            }
          })
          .map(appliedJobData => <AppliedJobItem key={appliedJobData.id} appliedJobData={appliedJobData} jobsApplied={jobsApplied} setJobsApplied={setJobsApplied}></AppliedJobItem>)
        }
      </div>
    </div>
  )
}

export default AppliedJobs