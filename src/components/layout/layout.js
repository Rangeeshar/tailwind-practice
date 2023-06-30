export default function Layout(props) {
  return (
    <div className="md:flex md:items-center md:justify-center md:flex-row p-3">
      {/* flex bg-white rounded-lg border-2 border-[##E6E6E6] w-[577px] */}
      <div className={props.outer_box_class}>
      {/* h-[598px] bg-white rounded-lg px-[30px] py-[32px] md:w-[28rem] sm:w-auto" */}
        <div className={props.outer_border_class}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
