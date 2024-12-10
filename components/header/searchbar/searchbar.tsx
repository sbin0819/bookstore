'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

const Searchbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (pathname === '/search') {
      const query = searchParams.get('q') || '';
      setSearch(query);
    } else {
      setSearch('');
    }
  }, [pathname, searchParams]);

  const handleReset = () => {
    setSearch('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <form
      className="order-3 col-[1/3] mt-4 flex w-full items-center rounded-lg bg-slate-100 py-2 md:order-none md:col-auto md:mt-0 md:w-80"
      onSubmit={handleSubmit}
    >
      <HiOutlineMagnifyingGlass className="mx-2 text-gray-500" size={24} />
      <input
        type="text"
        className="h-8 w-full border-transparent bg-slate-100 focus:border-transparent focus:outline-none focus:ring-0"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <AiFillCloseCircle
          className="mx-2 cursor-pointer text-gray-500"
          size={24}
          onClick={handleReset}
        />
      )}
    </form>
  );
};

export default Searchbar;
