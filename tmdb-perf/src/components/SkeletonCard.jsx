export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-lg border p-2">
      <div className="bg-gray-200 h-48 w-full rounded" />
      <div className="mt-2 h-4 bg-gray-200 rounded w-3/4" />
      <div className="mt-1 h-4 bg-gray-200 rounded w-1/2" />
    </div>
  );
}
