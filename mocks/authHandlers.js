// mocks/authHandlers.js
import { http, HttpResponse, delay } from 'msw';

export const loginSuccess = http.post('/api/login', async ({ request }) => {
  const body = await request.json();

  if (body.email === 'test@test.com' && body.password === '1234') {
    return new HttpResponse(null, { status: 200 });
  }

  return new HttpResponse(null, { status: 401 });
});

export const loginError = http.post('/api/login', () => {
  return new HttpResponse(null, { status: 500 });
});

export const loginLoading = http.post('/api/login', async () => {
  await delay(2000);
  return new HttpResponse(null, { status: 200 });
});