import { openApiInstance } from '@/services/base';
export const revalidate = 60;

export async function GET() {
  const res = await openApiInstance.get('/book.json?query=안드로이드&start=2');

  return Response.json({
    data: res,
  });
}
