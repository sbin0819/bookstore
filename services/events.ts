import { EventListResponse, EventsQuery } from '@/types/event';
import { baseApiInstance } from './base';

const apiPrefix = '/events';

export const getEvents = (query: EventsQuery) =>
  baseApiInstance.get<EventListResponse>(`${apiPrefix}`, { params: query });
