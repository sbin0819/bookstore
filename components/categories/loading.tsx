import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-wrap items-center justify-center py-4">
      <Skeleton className="mr-1 h-2 w-2 animate-bounce rounded-full bg-gray-300" />
      <Skeleton className="mr-1 h-2 w-2 animate-bounce rounded-full bg-gray-300" />
      <Skeleton className="h-2 w-2 animate-bounce rounded-full bg-gray-300" />
    </div>
  );
}
