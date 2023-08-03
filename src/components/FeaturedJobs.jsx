import { useState } from "react";
import FeaturedJobItem from "./FeaturedJobItem";
import { useLoaderData } from "react-router-dom";
const FeaturedJobs = () => {
  const features = useLoaderData();
  const [featureJobs, setFeatureJobs] = useState(features.slice(0, 4));
  return (
    <div className="max-w-[90%] mx-auto justify-between mb-32 pt-10" id="featured-jobs">
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
      featureJobs.map(feature => <FeaturedJobItem key={feature.id} feature={feature}/>)
     }
     </div>
    <div className="flex justify-center">
    <button style={featureJobs.length > 4 ? {display:'none'} : {display:'block'}} onClick={()=>setFeatureJobs(features)} className="btn bg-[#7E90FE] hover:bg-[#7E90FE] text-white font-extrabold text-[20px] mt-10">See All Jobs</button>
    </div>
    </div>
  );
};

export default FeaturedJobs;
