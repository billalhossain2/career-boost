import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import storeAppliedJobId from "../../../utilitis/storeAppliedJobId";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getAppliedJobsIds from "../../../utilitis/getAppliedJobsIds";

const JobDetails = () => {
  const {jobId} = useParams();
  const jobIdInt = parseInt(jobId)

  const [job, setJob] = useState(null);
  const {id, jobDescription, experiences, responsibility, educationalRequirements, salary, jobTitle, contactInfo} = job || {};
  const { phone, email, address} = contactInfo || {};

  const appliedJobsIds = getAppliedJobsIds()

  const [isApplied, setIsApplied] = useState(false)


  useEffect(()=>{
    fetch('../../jobs.json')
    .then(res => res.json())
    .then(data => {
      const allJobs = data.features;
      const jobDetails = allJobs.find(job => job.id === jobIdInt);
      if(appliedJobsIds.includes(jobDetails.id)){
        setIsApplied(true)
      }else{
        setIsApplied(false)
      }
      setJob(jobDetails)
    })
  }, [])


  const handleApplyJob = (applyJobId)=>{
    storeAppliedJobId(applyJobId);
    setIsApplied(true)
    toast("Applied!", {autoClose:2000})
  }
  return (
    <div className='mb-32 max-w-[90%] mx-auto'>
      <h1 className='text-3xl font-extrabold py-10 text-center'>Job Details</h1>
      <div className="details-container flex lg:flex-row flex-col gap-10">
        <div className="detail-item">
        <p className='mb-6'><span className='font-extrabold'>Job Description:</span> {jobDescription}</p>
        <p className='mb-6'><span className='font-extrabold'>Responsibilities:</span> Job Responsibility: {responsibility}</p>
        <h3 className='font-extrabold'>Educational Requirements:</h3>
        <p className='mb-6'>{educationalRequirements}</p>
        <h3 className='font-extrabold'>Experiences:</h3>
        <p>{experiences}</p>
        </div>
        <div className="detail-card lg:min-w-[424px] text-[20px] bg-[#f0f0f0] flex flex-col justify-between">
          <div className='p-3'>
          <h3 className='font-extrabold'>Job Details</h3>
          <hr className='my-3'/>
          <p><span className='font-extrabold'>Salary</span> : {salary}</p>
          <p><span className='font-extrabold'>Job Title</span> : {jobTitle}</p>
          <h3 className='font-extrabold mt-5'>Contact Information</h3>
          <hr className='my-3'/>
          <p>
            <img className='inline-block mr-3' src="../src/assets/Icons/phone.png" alt="" />
            <span className='font-extrabold'>Phone</span> : <span>{phone}</span>
          </p>
          <p>
          <img className='inline-block mr-3' src="../src/assets/Icons/mail.png" alt="" />
            <span className='font-extrabold'>Email</span> : <span>{email}</span>
          </p>
          <p>
          <img className='inline-block mr-3' src="../src/assets/Icons/location.png" alt="" />
            <span className='font-extrabold'>Address</span>: <span>{address}</span>
          </p>
          </div>
          <button disabled={isApplied ? true : false} onClick={()=>handleApplyJob(id)} className='btn bg-[#5f6fd8] hover:bg-[#4351a7] text-white w-full font-bold'>{isApplied ? 'Already Applied' : 'Apply Now'}</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default JobDetails