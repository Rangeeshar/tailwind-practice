
export default function Layout({children}) {
  return (
    <div className="md:flex md:items-center md:justify-center md:flex-row lg:flex lg:flex-col p-3">
      <div className="flex bg-white shadow-xl dark:shadow-slate-700 ease-linear duration-300">
        {children}
      </div>
    </div>
  );
}
