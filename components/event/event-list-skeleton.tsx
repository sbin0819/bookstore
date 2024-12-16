const EventListSkeleton = () => {
  const skeletonCount = 10;

  return (
    <div className="flex animate-pulse flex-col gap-4">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <div key={index} className="flex gap-4">
          <div className="relative aspect-[4/3] w-full max-w-72 rounded-lg bg-gray-300"></div>
          <div className="flex w-full flex-1 flex-col gap-2">
            <div className="h-6 w-3/4 rounded bg-gray-300"></div>
            <div className="flex items-center gap-4">
              <div className="h-4 w-16 rounded bg-gray-300"></div>
              <div className="h-4 w-32 rounded bg-gray-300"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-4 w-16 rounded bg-gray-300"></div>
              <div className="h-4 w-full rounded bg-gray-300"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventListSkeleton;
