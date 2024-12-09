const BookListSkeleton = () => {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index} className="animate-pulse">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-200"></div>
          <div className="mt-2 space-y-2">
            <div className="h-4 rounded bg-gray-200"></div>
            <div className="h-4 w-5/6 rounded bg-gray-200"></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookListSkeleton;
