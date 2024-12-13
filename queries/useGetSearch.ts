import { getSearch } from '@/services/search';
import { useQuery } from '@tanstack/react-query';

export function useGetSearch({
  query,
  display = 10,
  start = 1,
  enabled,
}: {
  query: string;
  display?: number;
  start?: number;
  enabled?: boolean;
}) {
  const { data, ...result } = useQuery({
    queryKey: ['getSearch', { query, display, start }],
    queryFn: () => getSearch({ query, display, start }).then((res) => res),
    enabled,
  });

  return { data, ...result };
}
