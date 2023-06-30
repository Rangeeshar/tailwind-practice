import React from "react";
import Header from "../common/header";
import Input from "../common/input";
import uuid from 'react-uuid';

const FormCard = () => {
  return (
    <>
      <Header step="Step 1"/>
      <form>
        <Input
          class_label="h-[64px] w-[20px] text-[14px] font-[600] mb-[4px]"
          class_input="text-[14px] border-2 border-[#E6E6E6] rounded w-full h-[36px] px-[10px]"
          name="Job title"
          required="*"
          placeholder="ex. UX UI Designer"
          id={uuid()}
        />
        <Input
          class_label="block text-[14px] font-[600] mb-[4px]"
          class_input="text-[14px] border-2 border-[#E6E6E6] rounded w-full h-[36px] px-[10px]"
          name="Company name"
          required="*"
          placeholder="ex. Google"
          id={uuid()}
        />
        <Input
          class_label="block text-[14px] font-[600] mb-[4px]"
          class_input="text-[14px] border-2 border-[#E6E6E6] rounded w-full h-[36px] px-[10px]"
          name="Industry"
          required="*"
          placeholder="ex. Information Technology"
          id={uuid()}
        />
        <div className="flex space-x-3">
          <Input
            class_label="block text-[14px] font-[600] mb-[4px]"
            class_input="text-[14px] border-2 border-#E6E6E6] rounded w-[244px] h-[36px] px-[10px]"
            name="Location"
            placeholder="ex. Chennai"
            id={uuid()}
          />
          <Input
            class_label="block text-[14px] font-[600] mb-[4px]"
            class_input="text-[14px] font-[500] border-2 border-[#E6E6E6] rounded w-[244px] h-[36px] px-[10px]"
            name="Remote type"
            placeholder="ex. In-office"
            id={uuid()}
          />
        </div>
        <div className="flex justify-end mt-[96px]">
          <button
            className="text-[16px] bg-[#1597E4] hover:bg-blue-700 text-white font-bold h-[40px] w-[68px] rounded-[6px] focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default FormCard;
