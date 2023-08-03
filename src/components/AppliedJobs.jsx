import AppliedJobItem from "./AppliedJobItem"
const AppliedJobs = () => {
  return (
    <div className='max-w-[90%] mx-auto mb-32'>
      <h1 className='font-extrabold text-3xl py-10 text-center mb-20'>Applied Jobs</h1>
      <div className='mb-8 flex justify-end font-semibold text-[20px]'>
        <select name="" id="">
          <option value="Filter" disabled selected>Filter</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>
      <div className="applied-jobs-container space-y-10">
        <AppliedJobItem/>
        <AppliedJobItem/>
        <AppliedJobItem/>
        <AppliedJobItem/>
        <AppliedJobItem/>
      </div>
    </div>
  )
}

export default AppliedJobs