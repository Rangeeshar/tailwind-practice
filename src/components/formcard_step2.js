import React from "react";

const FormTwo = () => {
  return (
    <div className="flex-auto items-left">
      <div className="h-full bg-white shadow-lg rounded-lg md:p-6 md:w-auto sm:w-auto">
        <div className="flex place-content-between">
          <p className="md:mb-4 text-[18px] font-bold">Create a job</p>
          <p className="text-[15px] font-bold">Step 2</p>
        </div>
        <form>
          <label
            className="block text-[12px] font-bold mb-2"
            htmlFor="experience"
          >
            Experience
          </label>
          <div className="mb-4 flex space-x-4">
            <input
              className="text-[14px] border-2 border-[##E6E6E6] rounded w-[12rem] h-7 py-2 px-3"
              id="experience"
              type="text"
              placeholder="Minimum"
            />
            <div >
              <input
                className="text-[14px] border-2 border-[##E6E6E6] rounded w-[12rem] h-7 py-2 px-3"
                id="experience"
                type="text"
                placeholder="Maximum"
              />
            </div>
          </div>
          <label
            className="block text-[12px] font-bold mb-2"
            htmlFor="salary"
          >
            Salary
          </label>
          <div className="mb-4 flex place-content-between">
            <input
              className="text-[14px] border-2 border-[##E6E6E6] rounded w-[12rem] h-7 py-2 px-3"
              id="salary"
              type="text"
              placeholder="Minimum"
            />
            <div>
              <input
                className="text-[14px] border-2 border-[##E6E6E6] rounded w-[12rem] h-7 py-2 px-3"
                id="salary"
                type="text"
                placeholder="Maximum"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-[12px] font-bold mb-2"
              htmlFor="company_name"
            >
              Total employee
            </label>
            <input
              className="text-[14px] border-2 border-[##E6E6E6] rounded w-full h-7 py-2 px-3"
              id="company_name"
              type="text"
              placeholder="ex. 100"
            />
          </div>
          <label
            className="block text-[12px] font-bold mb-2"
            htmlFor="apply_type"
          >
            Apply Type
          </label>
          <div className="flex space-x-2">
            <div class="flex items-center mr-2">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                class="w-4 h-5"
              />
              <label for="inline-radio" class="ml-3 text-[12px]">
                Quick apply
              </label>
            </div>
            <div class="flex items-center mr-2">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="inline-radio" class="ml-3 text-[12px]">
                External apply
              </label>
            </div>
          </div>
          <div className="flex justify-end py-4">
            <button
              className="text-[14px] bg-[#1597E4] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormTwo;
