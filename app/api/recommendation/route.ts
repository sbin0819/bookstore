import { openApiInstance } from '@/services/base';

export async function GET(): Promise<Response> {
  const data = await openApiInstance.get(
    '/book.json?query=자바스크립트&display=30'
  );

  return Response.json(data);
}
