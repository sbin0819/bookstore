// src/components/event-list/EventList.tsx

'use client';

import { useGetEvents } from '@/queries/useGetEvents';
import { useEffect, useState } from 'react';
import EventCard from './event-card';
import EventListSkeleton from './event-list-skeleton';
import EventPagination from './event-pagination';

const EventList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, refetch } = useGetEvents({
    page,
  });

  const totalPages = data?.totalPages || 0;

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 'instant' 대신 'smooth'로 변경하여 부드러운 스크롤 애니메이션 적용
    });
  }, [page]);

  if (isLoading) {
    return <EventListSkeleton />;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        <p>Error fetching events. Please try again later.</p>
        <button
          onClick={() => refetch()}
          className="mt-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        {data &&
          data.data.map((item) => <EventCard key={item.id} event={item} />)}
      </div>
      <EventPagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default EventList;
