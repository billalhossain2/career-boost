import { useEffect, useState } from "react";
import getAppliedJobsIds from "../../../utilitis/getAppliedJobsIds"
import AppliedJobItem from "./AppliedJobItem";
import useTitle from "../../../Hooks/useTitle";
const AppliedJobs = () => {
  useTitle("Applied Jobs")
 const appliedJobsIds = getAppliedJobsIds();
 const [jobsApplied, setJobsApplied] = useState([])

 useEffect(()=>{
  fetch('../../jobs.json')
  .then(res => res.json())
  .then(data => {
    const allJobs = data.features;
    const applied = allJobs.filter(job => appliedJobsIds.includes(job.id))
    setJobsApplied(applied)
  })
 }, [])

  return (
    <div className='max-w-[90%] mx-auto mb-32'>
      <h1 className='font-extrabold text-3xl py-10 text-center mb-20'>Applied Jobs</h1>
      {
        !jobsApplied.length && <h1 className="text-center font-bold text-xl text-red-300">You didn't apply to any job yet !</h1>
      }
      <div className='mb-8 flex justify-end font-semibold text-[20px]'>
        <select name="" id="">
          <option defaultValue="Filter" disabled>Filter</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
          <option value="All">All</option>
        </select>
      </div>
      <div className="applied-jobs-container space-y-10">
        {
          jobsApplied.map(appliedJobData => <AppliedJobItem key={appliedJobData.id} appliedJobData={appliedJobData} jobsApplied={jobsApplied} setJobsApplied={setJobsApplied}></AppliedJobItem>)
        }
      </div>
    </div>
  )
}

export default AppliedJobs