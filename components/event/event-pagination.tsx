'use client';

import React from 'react';

interface EventPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const EventPagination: React.FC<EventPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="mt-6 flex justify-center space-x-2 pb-6">
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          aria-current={currentPage === pageNumber ? 'page' : undefined}
          className={`rounded px-4 py-2 ${
            currentPage === pageNumber
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default EventPagination;
