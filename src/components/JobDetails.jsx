import React from 'react'

const JobDetails = () => {
  return (
    <div className='mb-32 max-w-[90%] mx-auto'>
      <h1 className='text-3xl font-extrabold py-10 text-center'>Job Details</h1>
      <div className="details-container flex lg:flex-row flex-col gap-10">
        <div className="detail-item">
        <p className='mb-6'><span className='font-extrabold'>Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
        <p className='mb-6'><span className='font-extrabold'>Responsibilities:</span> Job Responsibility: Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
        <h3 className='font-extrabold'>Educational Requirements:</h3>
        <p className='mb-6'>Bachelor degree to complete any reputational university.</p>
        <h3 className='font-extrabold'>Experiences:</h3>
        <p>2-3 Years in this field.</p>
        </div>
        <div className="detail-card lg:min-w-[424px] text-[20px] bg-[#f0f0f0] flex flex-col justify-between">
          <div className='p-3'>
          <h3 className='font-extrabold'>Job Details</h3>
          <hr className='my-3'/>
          <p><span className='font-extrabold'>Salary</span> : 100K - 150K (Per Month)</p>
          <p><span className='font-extrabold'>Job Title</span> : Product Designer</p>
          <h3 className='font-extrabold mt-5'>Contact Information</h3>
          <hr className='my-3'/>
          <p>
            <img className='inline-block mr-3' src="../src/assets/Icons/phone.png" alt="" />
            <span className='font-extrabold'>Phone</span> : <span>01750-00 00 00</span>
          </p>
          <p>
          <img className='inline-block mr-3' src="../src/assets/Icons/mail.png" alt="" />
            <span className='font-extrabold'>Email</span> : <span>info@gmail.com</span>
          </p>
          <p>
          <img className='inline-block mr-3' src="../src/assets/Icons/location.png" alt="" />
            <span className='font-extrabold'>Address</span>: <span>Dhanmondi 32, 
          Sukrabad Dhaka, Bangladesh</span>
          </p>
          </div>
          <button className='btn bg-[#7E90FE] hover:bg-[#7E90FE] text-white w-full'>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default JobDetails