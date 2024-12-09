import { getRecommendations } from '@/services/recommendation';
import { useQuery } from '@tanstack/react-query';

export function useGetRecommendation() {
  const { data, ...result } = useQuery({
    queryKey: ['getRecommendations'],
    queryFn: () => getRecommendations().then((res) => res),
  });

  return { data, ...result };
}
