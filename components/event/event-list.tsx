// src/components/event-list/EventList.tsx

'use client';

import { useGetEvents } from '@/queries/useGetEvents';
import { useState } from 'react';
import EventCard from './event-card';
import EventListSkeleton from './event-list-skeleton';
import EventPagination from './event-pagination';

const EventList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetEvents({
    page: currentPage,
  });

  const totalPages = data?.totalPages || 0;

  const handlePageChange = (pageNumber: number) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  if (isLoading) {
    return <EventListSkeleton />;
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        {data &&
          data.data.map((item) => <EventCard key={item.id} event={item} />)}
      </div>
      <EventPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
};

export default EventList;
