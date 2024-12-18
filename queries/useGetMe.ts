import { getMe } from '@/services/auth';
import { useQuery } from '@tanstack/react-query';

export function useGetMe() {
  const { data, ...result } = useQuery({
    queryKey: ['getMe'],
    queryFn: () => getMe().then((res) => res),
  });

  return { data, ...result };
}
