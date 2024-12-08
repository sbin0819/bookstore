export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
}

export interface CategoryListResponse {
  data: CategoryItem[];
}
