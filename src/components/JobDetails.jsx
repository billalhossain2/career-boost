import { useLoaderData } from "react-router-dom"
import addStorage from "../storage/addStorage";
const JobDetails = () => {
  const jobDetailsItem = useLoaderData();
  const {jobDescription, responsibility, educationalRequirements, experiences, salary, jobTitle, contactInfo} = jobDetailsItem;
  const {phone, email, address} = contactInfo;
  const addToLocalDb = ()=>{
    addStorage(jobDetailsItem)
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
          <button onClick={addToLocalDb} className='btn bg-[#7E90FE] hover:bg-[#7E90FE] text-white w-full'>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default JobDetails