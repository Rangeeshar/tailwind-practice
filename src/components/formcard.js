import React from "react";

const FormCard = () => {
  return (
    <div className="flex-auto items-left">
      <div className="h-full bg-white shadow-lg rounded-lg md:p-6 md:w-auto sm:w-auto">
        <div className="flex place-content-between">
          <p className="md:text-base md:mb-4">Create a job</p>
          <p className="text-base mb-4">Step 1</p>
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="job_title"
            >
              Job title<span style={{"color":"red"}}>*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="job_title"
              placeholder="ex. UX UI Designer"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="company_name"
            >
              Company name<span style={{"color":"red"}}>*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company_name"
              type="text"
              placeholder="ex. Google"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="industry"
            >
              Industry<span style={{"color":"red"}}>*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="industry"
              type="text"
              placeholder="ex. Information Technology"
            />
          </div>
          <div className="flex place-content-between space-x-5">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="location"
              >
                Location
              </label>
              <input
                className="h-8 appearance-none border rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                type="text"
                placeholder=" ex. Chennai"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="remote"
              >
                Remote Type
              </label>
              <input
                className="h-8 appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="remote"
                type="text"
                placeholder=" ex. In-Office"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
