export default function Loading() {
  return (
    <div className="flex h-16 flex-wrap items-center justify-center">
      <div className="mr-1 h-4 w-4 animate-bounce rounded-full bg-gray-300" />
      <div className="mr-1 h-4 w-4 animate-bounce rounded-full bg-gray-300" />
      <div className="h-4 w-4 animate-bounce rounded-full bg-gray-300" />
    </div>
  );
}
