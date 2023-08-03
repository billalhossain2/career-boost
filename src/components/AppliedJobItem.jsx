import { Link } from "react-router-dom";
const AppliedJobItem = () => {
  return (
    <div className="applied-job-item flex lg:flex-row flex-col justify-between items-center drop-shadow-lg bg-white border-[1px] border-solid border-[#d6d2d2] p-10">
      <div className="applied-job-content flex lg:flex-row flex-col items-center gap-5">
        <img
          className="w-[100px] h-[50px]"
          src="../src/assets/Logo/google.png"
          alt=""
        />
        <div>
          <h3 className="text-[24px] font-extrabold mb-[8px]">
            Technical Database Engineer
          </h3>
          <p className="text-[24px] font-semibold mb-[8px] text-[#757575]">
            Google LLC
          </p>
          <div className="mb-6">
            <button className="border-[1px] border-solid border-[#7E90FE] px-3 py-2 text-[#7E90FE] rounded-[3px] mr-2 font-extrabold text-[16px]">
              Remote
            </button>
            <button className="border-[1px] border-solid border-[#7E90FE] px-3 py-2 text-[#7E90FE] rounded-[3px] font-extrabold text-[16px]">
              Full Time
            </button>
          </div>
          <div className="font-semibold text-[20px] text-[#757575]">
            <span>Dhaka, Bangladesh</span> <span>Salary : 70K - 90K</span>
          </div>
        </div>
      </div>
      <div>
       <Link to="/job-details">
       <button className="bg-[#7E90FE] rounded-[3px] font-extrabold text-[20px] text-white px-[18px] py-[12px]">
          View Detials
        </button>
       </Link>
      </div>
    </div>
  );
};

export default AppliedJobItem;
