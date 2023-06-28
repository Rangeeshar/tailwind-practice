
export default function Layout({children}) {
  return (
    <div className="md:flex md:items-center md:justify-center md:flex-row lg:flex lg:flex-col p-2">
      <div className="flex bg-white rounded-md border-2 border-[##E6E6E6]">
        {children}
      </div>
    </div>
  );
}
