import { getSearch } from '@/services/search';
import { useQuery } from '@tanstack/react-query';

export function useGetSearch({
  query,
  display = 10,
  start = 1,
}: {
  query: string;
  display?: number;
  start?: number;
}) {
  const { data, ...result } = useQuery({
    queryKey: ['getSearch', { query, display, start }],
    queryFn: () => getSearch({ query, display, start }).then((res) => res),
    enabled: query.trim() !== '',
  });

  return { data, ...result };
}
