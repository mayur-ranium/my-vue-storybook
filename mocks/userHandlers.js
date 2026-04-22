// mocks/userHandlers.js
import { http, HttpResponse, delay } from 'msw';

export const successHandler = http.get('/api/users', () => {
  return HttpResponse.json([{ id: 1, name: 'Mayur' }, { id: 2, name: 'Amit' }, { id: 1, name: 'Rahul' }]);
});

export const errorHandler = http.get('/api/users', () => {
  return new HttpResponse(null, { status: 500 });
});

export const loadingHandler = http.get('/api/users', async () => {
  await delay(2000);
  return HttpResponse.json([]);
});