const Input = (props) => {
  return (
    <div className="mt-[24px]">
        {/* block text-[14px] font-[500] mb-[4px] */}
      <label className={props.class_label} htmlFor={props.id}>
        {props.name}<span style={{ color: "red" }}>{props.required}</span>
      </label>
      {/* text-[14px] border-2 border-[##E6E6E6] rounded w-full h-[36px] px-[10px] */}
      <input
        className={props.class_input}
        id={props.id}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};
export default Input;
