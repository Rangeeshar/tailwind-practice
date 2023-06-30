import React from "react";
import Header from "../common/header";
import Input from "../common/input";
import uuid from "react-uuid";
import GroupInput from "../common/group_input";

const FormTwo = () => {
  return (
    <div>
      <Header step="Step 2" />
      <form>
        <GroupInput
          name="Experience"
          label_class="h-[64px] w-[20px] text-[14px] font-[600]"
          input_class_1="text-[14px] border-2 border-#E6E6E6] rounded w-[244px] h-[36px] "
          placeholder_1="   Minimum"
          input_class_2="ml-2 text-[14px] border-2 border-#E6E6E6] rounded w-[244px] h-[36px] px-[10px]"
          placeholder_2="Maximum"
          id={uuid()}
        />
        <GroupInput
          name="Salary"
          label_class="h-[64px] w-[20px] text-[14px] font-[600]"
          input_class_1="text-[14px] border-2 border-#E6E6E6] rounded w-[244px] h-[36px] "
          placeholder_1="   Minimum"
          input_class_2="ml-2 text-[14px] border-2 border-#E6E6E6] rounded w-[244px] h-[36px] px-[10px]"
          placeholder_2="Maximum"
          id={uuid()}
        />
        <Input
          class_label="text-[14px] font-[600] mb-[4px]"
          class_input="block text-[14px] border-2 border-#E6E6E6] rounded w-[244px] h-[36px] px-[10px]"
          name="Total employee"
          placeholder=" ex. 100"
          id={uuid()}
        />
        <label
          className="mt-[24px] block text-[14px] font-bold mb-2"
          htmlFor="apply_type"
        >
          Apply Type
        </label>
        <div className="flex space-x-2">
          <div class="flex items-center mr-2">
            <input
              id="inline-radio-1"
              type="radio"
              value=""
              name="inline-radio-1"
              class="w-[20px] h-[20px] border-2 border-red-600"
            />
            <label for="inline-radio-1" class="ml-[4px] text-[#7A7A7A] text-[600] text-[14px]">
              Quick apply
            </label>
          </div>
          <div class="flex items-center ">
            <input
              id="inline-radio-2"
              type="radio"
              value=""
              name="inline-radio-2"
              class="w-[20px] h-[20px]"
            />
            <label for="inline-radio-2" class="ml-[4px] text-[#7A7A7A] text-[600] text-[14px]">
              External apply
            </label>
          </div>
        </div>
        <div className="flex justify-end py-4">
        <div className="flex justify-end mt-[96px]">
          <button
            className="text-[16px] bg-[#1597E4] hover:bg-blue-700 text-white font-bold h-[40px] w-[68px] rounded-[6px] focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default FormTwo;
