import supertest from 'supertest';
import app from "../..";
const request = supertest(app);

it('Using the main endpoint returns 200', async () => {
    await request.get('/').expect(200);
  });