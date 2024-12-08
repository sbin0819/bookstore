import { apiInstance } from '@/services/base';
export const revalidate = 60;

export async function GET() {
  const res = await apiInstance.get('/book.json?query=안드로이드');

  return Response.json({
    data: res,
  });
}
