const request = require('supertest');
const app = require('../start');

describe('Test Endpoints', () => {
  it('Test root route', async() => {
    const res = await request(app).get('/');
    expect(res).toEqual('api working from digital ocean');
  })
})

