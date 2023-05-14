import { describe, it } from '@jest/globals';
import request from 'supertest';
import app from '../../app.js';

describe('GET /api/categories', () => {
  it('returns all categories', async () => {
    await request(app)
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let id;
describe('POST /api/admin/categories', () => {
  it('creates a category', async () => {
    const response = await request(app)
      .post('/api/admin/categories')
      .send({
        nome: 'TESTE',
        status: 'ATIVA',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    // eslint-disable-next-line no-underscore-dangle
    id = response.body._id;
  });
});

describe('GET /api/categories/:id', () => {
  it('returns a category found by its id', async () => {
    await request(app)
      .get(`/api/categories/${id}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PUT /api/admin/categories', () => {
  it('updates a category', async () => {
    await request(app)
      .put(`/api/admin/categories/${id}`)
      .send({
        nome: 'TESTE',
        status: 'INATIVA',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('DELETE /api/admin/categories/:id', () => {
  it('deletes a category', async () => {
    await request(app)
      .delete(`/api/admin/categories/${id}`)
      .set('Accept', 'application/json')
      .expect(204);
  });
});
