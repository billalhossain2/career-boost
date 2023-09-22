import { Link } from "react-router-dom";
import getAppliedJobsIds from "../../../utilitis/getAppliedJobsIds";
import storeAppliedJobId from "../../../utilitis/storeAppliedJobId";
import Swal from "sweetalert2";
const AppliedJobItem = ({ appliedJobData, jobsApplied, setJobsApplied }) => {
  const { id, companyLogo, jobTitle, jobStatus, location, jobType } =
    appliedJobData;

  const handleRemove = (applidJobId) => {
    //confirm to delete
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        const restJobs = jobsApplied.filter(
          (appliedJob) => appliedJob.id !== applidJobId
        );
        setJobsApplied(restJobs);

        //remove from local storage
        const storedJobIds = getAppliedJobsIds();
        const restIds = storedJobIds.filter(
          (storedId) => storedId !== applidJobId
        );
        localStorage.setItem("storedAppliedJobsIds", JSON.stringify(restIds));
        // storeAppliedJobId()
      }
    });
  };
  return (
    <div className="applied-job-item flex lg:flex-row flex-col justify-between items-center drop-shadow-lg bg-white border-[1px] border-solid border-[#d6d2d2] p-10">
      <div className="applied-job-content flex lg:flex-row flex-col items-center gap-5">
        <img
          className="w-[100px] h-[50px]"
          src={companyLogo}
          alt="Company Logo"
        />
        <div>
          <h3 className="text-[24px] font-extrabold mb-[8px]">{jobTitle}</h3>
          <p className="text-[24px] font-semibold mb-[8px] text-[#757575]">
            {"companyName"}
          </p>
          <div className="mb-6">
            <button className="border-[1px] border-solid border-[#7E90FE] px-3 py-2 text-[#7E90FE] rounded-[3px] mr-2 font-extrabold text-[16px]">
              {jobType}
            </button>
            <button className="border-[1px] border-solid border-[#7E90FE] px-3 py-2 text-[#7E90FE] rounded-[3px] font-extrabold text-[16px]">
              {jobStatus}
            </button>
          </div>
          <div className="font-semibold text-[20px] text-[#757575]">
            <span>{location}</span>
            <br />
            <span>Salary : {"salary"}</span>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/main/job-details/${id}`}>
          <button className="bg-[#7E90FE] hover:bg-[#5563bb] rounded-[3px] font-extrabold text-[20px] text-white px-[18px] py-[12px]">
            View Detials
          </button>
        </Link>
        <button
          onClick={() => handleRemove(id)}
          className="btn font-bold bg-red-400 ml-5 text-white hover:bg-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default AppliedJobItem;
