'use client';

import { EventType } from '@/types/event';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useState } from 'react';

interface EventCardProps {
  event: EventType;
}

const EventCard = ({ event }: EventCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="flex flex-col md:flex-row md:gap-4">
      <div className="relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden rounded-lg border md:max-w-72">
        {isLoading && (
          <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-gray-200" />
        )}

        {!hasError ? (
          <Image
            src={event.imageUrl}
            alt={event.title}
            className={`object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            fill
            onLoad={handleImageLoad}
            onError={handleImageError}
            placeholder="blur"
            blurDataURL="/placeholder.png"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <svg
              className="h-12 w-12 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 13h6m2 0a2 2 0 110 4h-10a2 2 0 110-4m10 0V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex w-full flex-1 flex-col gap-4 pt-4">
        <h2 className="text-3xl">{event.title}</h2>
        <div className="flex items-start gap-4">
          <div className="font-bold">기간</div>
          <div>
            {dayjs(event.startDate).format('YYYY-MM-DD')} ~{' '}
            {dayjs(event.endDate).format('YYYY-MM-DD')}
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 font-bold">내용</div>
          <div>{event.description}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
