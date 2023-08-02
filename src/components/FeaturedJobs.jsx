import FeaturedJobItem from "./FeaturedJobItem";
const FeaturedJobs = () => {
  return (
    <div className="max-w-[90%] mx-auto justify-between mb-32">
      <h1 className="text-3xl font-extrabold mb-3 text-center">
        Featured Jobs
      </h1>
      <p className="text-center mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      {/* card item  */}
     <div className="featured-jobs-container grid grid-cols-2 gap-14">
     <FeaturedJobItem/>
     <FeaturedJobItem/>
     <FeaturedJobItem/>
     <FeaturedJobItem/>
     </div>
    <div className="flex justify-center">
    <button className="btn bg-[#7E90FE] hover:bg-[#7E90FE] text-white font-extrabold text-[20px] mt-10">See All Jobs</button>
    </div>
    </div>
  );
};

export default FeaturedJobs;
