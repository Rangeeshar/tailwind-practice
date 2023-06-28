import React from "react";

const JobCard = () => {
  return (
    <div className="flex md:w-[28rem]">
      <div className="h-full bg-white shadow-lg rounded-lg md:p-6 md:w-[28rem] sm:w-auto">
        <div className="flex space-x-2">
          <div className="flex space-y-4 mb-3">
            <img
              className="relative inline-block h-12 w-12 rounded-lg object-cover object-center"
              alt="job logo"
              src="netflix.png"
            />
          </div>
          <div className="flex-wrap">
            <p>UX UI Designer</p>
            <p className="text-[15px]">Great vibes - Information Technology</p>
            <p className="text-[15px] text-[#7A7A7A]">Chennai, Tamilnadu, India (In-office)</p>
            <div className="space-y-1 mt-4">
            <p className="text-[14px]">Part-Time (9.00 am - 5.00 pm IST)</p>
            <p className="text-[14px]">Experience (1 - 2 Years)</p>
            <p className="text-[14px]">INR 30,000 - 60, 000 / Month</p>
            <p className="text-[14px]">51 - 200 employees</p>
            <div className="flex justify-start space-x-2">
            <button
              className="text-[14px] bg-[#1597E4] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Apply Now
            </button>
            <button
              className="text-[14px] bg-[white] border-2 border-[#1597E4] hover:bg-blue-700 text-[#1597E4] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              External Apply
            </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobCard;
