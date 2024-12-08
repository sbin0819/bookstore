export interface BookItem {
  title: string;
  link: string;
  image: string;
  author: string;
  discount: string; // "0", "9900" 등 문자열로 되어있으므로 string 타입
  publisher: string;
  pubdate: string; // "20110729" 등 문자열 형태의 날짜
  isbn: string;
  description: string;
}

export interface BookListResponse {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: BookItem[];
}
