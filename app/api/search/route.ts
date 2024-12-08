import { openApiInstance } from '@/services/base';

export async function GET(): Promise<Response> {
  const data = await openApiInstance.get('/book.json?query=안드로이드');

  return Response.json(data);
}
