'use client';

import { BookType } from '@/types/book';
import React from 'react';

interface SearchResultBoxProps {
  items: BookType[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  onSelect: (item: BookType) => void;
}

const SearchResultBox: React.FC<SearchResultBoxProps> = ({
  items,
  selectedIndex,
  setSelectedIndex,
  onSelect,
}) => {
  if (items.length === 0) {
    return (
      <div className="absolute top-[calc(100%_+_10px)] z-10 flex h-auto w-full items-center justify-center rounded-xl border bg-white px-4 py-4 text-gray-500 shadow-lg md:w-[440px]">
        검색결과가 없습니다.
      </div>
    );
  }

  const handleMouseEnter = (index: number) => {
    setSelectedIndex(index);
  };

  const handleMouseDown = (item: BookType) => {
    onSelect(item);
  };

  return (
    <div className="absolute top-[calc(100%_+_10px)] z-10 h-auto min-w-full rounded-xl border bg-white px-2 py-4 shadow-lg md:w-[440px]">
      <ul className="flex flex-col gap-2">
        {items.map((item: BookType, index: number) => (
          <li
            key={item.isbn}
            className={`cursor-pointer rounded-md px-2 py-2 ${
              index === selectedIndex ? 'bg-blue-100' : ''
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseDown={() => handleMouseDown(item)}
          >
            <div className="line-clamp-1">{item.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultBox;
