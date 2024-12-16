'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

interface EventPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  onPrevPage: () => void;
  onNextPage: () => void;
}

const EventPagination: React.FC<EventPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onPrevPage,
  onNextPage,
}) => {
  const getPages = () => {
    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
      if (currentPage <= 2) {
        return [1, 2, 3, 4];
      } else if (currentPage >= totalPages - 1) {
        return [totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        return [currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
      }
    }
  };

  const pages = getPages();

  return (
    <div className="mt-6 flex justify-center space-x-2 pb-6">
      {currentPage > 1 && (
        <button
          onClick={onPrevPage}
          disabled={currentPage === 1}
          className={`rounded px-4 py-2 ${
            currentPage === 1
              ? 'cursor-not-allowed bg-gray-300 text-gray-500'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-label="Previous Page"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}

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

      {currentPage < totalPages && (
        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className={`rounded px-4 py-2 ${
            currentPage === totalPages
              ? 'cursor-not-allowed bg-gray-300 text-gray-500'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-label="Next Page"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default EventPagination;
