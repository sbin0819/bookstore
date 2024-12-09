import { getCategories } from '@/services/category';
import { useQuery } from '@tanstack/react-query';

export function useGetCategories() {
  const { data, ...result } = useQuery({
    queryKey: ['getCategories'],
    queryFn: () => getCategories().then((res) => res),
  });

  return { data, ...result };
}
