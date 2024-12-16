export type EventType = {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export type EventListResponse = {
  data: EventType[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
};

export type EventsQuery = {
  page?: number;
};
