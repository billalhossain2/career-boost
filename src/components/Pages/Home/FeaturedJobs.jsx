import { useEffect, useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import FeaturedJobItem from "./FeaturedJobItem";
const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([])
  const [allJobs, setAllJobs] = useState([])


  useEffect(()=>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => {
      const loadedAllJobs = data.features;
      setAllJobs(loadedAllJobs)

      const slicedJobs = data.features.slice(0, 4);
      setJobs(slicedJobs)
    })
    .catch(error => console.log(error.message))
  }, [])

  const handleShowAllJobs = ()=>{
    setJobs(allJobs)
  }

  return (
    <div
      className="max-w-[90%] mx-auto justify-between mb-32 pt-10"
      id="featured-jobs"
    >
      <h1 className="text-3xl font-extrabold mb-3 text-center">
        Featured Jobs
      </h1>
      <p className="text-center mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      {/* card item  */}
      <div className="featured-jobs-container grid lg:grid-cols-2 grid-cols-1 gap-14">
        {
          jobs?.map(job => <FeaturedJobItem key={job.id} job={job}></FeaturedJobItem>)
        }
      </div>
      <div className="flex justify-center">
        <button onClick={handleShowAllJobs} className={`${jobs.length > 4 ? 'hidden' : ''} btn bg-[#7E90FE] hover:bg-[#4e5bad] text-white font-extrabold text-[20px] mt-10`}>
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
