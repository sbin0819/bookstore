import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

const Searchbar = () => {
  return (
    <div className="order-3 col-[1/3] mt-4 flex w-full items-center rounded-lg bg-slate-100 py-2 md:order-none md:col-auto md:w-80">
      <HiOutlineMagnifyingGlass className="mx-2 text-gray-500" size={24} />
      <input
        type="text"
        className="h-8 w-full border-transparent bg-slate-100 focus:border-transparent focus:outline-none focus:ring-0"
      />
    </div>
  );
};

export default Searchbar;
