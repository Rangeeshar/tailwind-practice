const group_input = (props) => {
  return (
    <div className="flex-1 mt-[24px]">
      <label className={props.label_class} htmlFor="experience">
        {props.name}
      </label>
      <div>
      {/* text-[14px] border-2 border-[#E6E6E6] rounded w-[12rem] h-7 py-2 px-3 */}
      <input
        className={props.input_class_1}
        id={props.id}
        type="text"
        placeholder={props.placeholder_1}
      />
      {/* text-[14px] border-2 border-[#E6E6E6] rounded w-[12rem] h-7 py-2 px-3 */}
        <input
          className={props.input_class_2}
          id={props.id}
          type="text"
          placeholder={props.placeholder_2}
        />
      </div>
    </div>
  );
};

export default group_input;
