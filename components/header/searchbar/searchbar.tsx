'use client';

import { useDebounce } from '@/hooks/useDebounce';
import { useGetSearch } from '@/queries/useGetSearch';
import { BookType } from '@/types/book';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import SearchResultBox from './search-result-box';

const Searchbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const debouncedSearch = useDebounce(search, 100);
  const { data } = useGetSearch({
    query: debouncedSearch,
    display: 5,
    enabled: isFocused && debouncedSearch !== '',
  });
  const items = data?.items || [];

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (pathname === '/search') {
      const query = searchParams.get('q') || '';
      setSearch(query);
    } else {
      setSearch('');
    }
  }, [pathname, searchParams]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleReset = () => {
    setSearch('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(search)}`);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setSelectedIndex(-1); // 포커스 되면 선택 인덱스 초기화
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  const handleSelect = (item: BookType) => {
    setIsFocused(false);
    router.push(`/search?q=${encodeURIComponent(item.title)}`);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isFocused || items.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % items.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          handleSelect(items[selectedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        inputRef.current?.blur();
        setIsFocused(false);
        break;
      default:
        break;
    }
  };

  return (
    <form
      className="relative order-3 col-[1/3] mt-4 flex w-full items-center rounded-lg bg-slate-100 py-2 md:order-none md:col-auto md:mt-0 md:w-80"
      onSubmit={handleSubmit}
    >
      <HiOutlineMagnifyingGlass className="mx-2 text-gray-500" size={24} />
      <input
        ref={inputRef}
        type="text"
        className="h-8 w-full border-transparent bg-slate-100 focus:border-transparent focus:outline-none focus:ring-0"
        value={search}
        onChange={handleOnChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      {search && (
        <AiFillCloseCircle
          className="mx-2 cursor-pointer text-gray-500"
          size={24}
          onClick={handleReset}
        />
      )}
      {isFocused && (
        <SearchResultBox
          items={items}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          onSelect={handleSelect}
        />
      )}
    </form>
  );
};

export default Searchbar;
