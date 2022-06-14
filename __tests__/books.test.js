const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('should return a list of books', async() => {
    const res = await request(app).get('/books/1');
    expect(res.body).toEqual({
      'id': '1',
      'title': 'Big Trouble',
      'publisher': 'Putnam',
      'release': '1999-09-09'
    });
  });
  afterAll(() => {
    pool.end();
  });
});
