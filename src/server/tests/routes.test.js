const express = require('express');
const request = require('supertest');

// The Models need to be required before the routes
require('../models/ChordSheet');
require('../models/User');

const routes = require('../routes');
const app = express();

app.use(routes)

describe('Test Endpoints', () => {
  it('Test root route', async() => {
    const res = await request(app)
    .get('/');
    await expect(res.text).toEqual('Home api route working');
  })
})


