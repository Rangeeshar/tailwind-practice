const Header = (props) => {
  return (
    <div className="flex place-content-between">
      <p className="text-[18px] font-[600]">Create a job</p>
      <p className="text-[15px] font-[600]">{props.step}</p>
    </div>
  );
};
export default Header;
