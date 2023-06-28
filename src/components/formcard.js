import React from "react";

const FormCard = () => {
  return (
    <div className="flex-auto items-left">
      <div className="h-full bg-white shadow-lg rounded-lg md:p-6 md:w-[28rem] sm:w-auto">
        <div className="flex place-content-between">
          <p className="md:mb-4 text-[18px] font-bold">Create a job</p>
          <p className="text-[15px] font-bold">Step 1</p>
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-[12px] font-bold mb-2"
              htmlFor="job_title"
            >
              Job title<span style={{"color":"red"}}>*</span>
            </label>
            <input
              className="text-[14px] border-2 border-[##E6E6E6] rounded w-full h-7 py-2 px-3"
              id="name"
              type="job_title"
              placeholder="ex. UX UI Designer"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[12px]  font-bold mb-2"
              htmlFor="company_name"
            >
              Company name<span style={{"color":"red"}}>*</span>
            </label>
            <input
              className="text-[14px] border-2 border-[##E6E6E6] rounded w-full py-2 px-3 h-7"
              id="company_name"
              type="text"
              placeholder="ex. Google"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[12px] font-bold mb-2"
              htmlFor="industry"
            >
              Industry<span style={{"color":"red"}}>*</span>
            </label>
            <input
              className="text-[14px] border-2 border-[##E6E6E6] rounded w-full h-7 py-2 px-3"
              id="industry"
              type="text"
              placeholder="ex. Information Technology"
            />
          </div>
          <div className="flex place-content-between space-x-5">
            <div className="mb-4">
              <label
                className="block text-[12px] font-bold mb-2"
                htmlFor="location"
              >
                Location
              </label>
              <input
                className="text-[14px] border-2 border-[##E6E6E6] rounded w-full h-7 py-2 px-3"
                id="location"
                type="text"
                placeholder=" ex. Chennai"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[12px] font-bold mb-2"
                htmlFor="remote"
              >
                Remote Type
              </label>
              <input
                className="text-[14px] border-2 border-[##E6E6E6] rounded w-full h-7 py-2 px-3"
                id="remote"
                type="text"
                placeholder=" ex. In-office"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="text-[14px] bg-[#1597E4] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCard;
