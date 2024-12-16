import { getEvents } from '@/services/events';
import { EventsQuery } from '@/types/event';
import { useQuery } from '@tanstack/react-query';

export function useGetEvents(query: EventsQuery) {
  const { data, ...result } = useQuery({
    queryKey: ['getEvents', query.page],
    queryFn: () => getEvents(query).then((res) => res),
  });

  return { data, ...result };
}
