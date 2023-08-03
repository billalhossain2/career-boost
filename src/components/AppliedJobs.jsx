import AppliedJobItem from "./AppliedJobItem"
import getStorage from "../storage/getStorage"
import { useState } from "react"
const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState(getStorage() || []);
  const [filteredText, setFilteredText] = useState(null);
  const handleFilter = (ev)=>{
    setFilteredText(ev.target.value)
  }

  return (
    <div className='max-w-[90%] mx-auto mb-32'>
      <h1 className='font-extrabold text-3xl py-10 text-center mb-20'>Applied Jobs</h1>
      <div className='mb-8 flex justify-end font-semibold text-[20px]'>
        <select name="" id="" onChange={handleFilter}>
          <option value="Filter" disabled selected>Filter</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
          <option value="All">All</option>
        </select>
      </div>
      <div className="applied-jobs-container space-y-10">
        {
          appliedJobs
          .filter(item => {
            if(filteredText){
              if(filteredText.toLowerCase() === item.jobType.toLowerCase()){
                return item;
              }else if(filteredText.toLowerCase() === "all"){
                return item;
              }
            }else{
              return item;
            }
          })
          .map(appliedJob =>  <AppliedJobItem key={appliedJob.id} appliedJob={appliedJob}/>)
        }
      </div>
    </div>
  )
}

export default AppliedJobs