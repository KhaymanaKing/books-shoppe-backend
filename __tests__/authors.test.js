const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('author routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/authors should return a list of authors', async() => {
    const res = await request(app).get('/authors');
    const authors = await Author.getAll();
    const expected = authors.map((author) => {
      return{
        id: authors.id,
        name: authors.name,
        dob: authors.dob,
        pob: authors.pob };
    });
    expect(res.body).toEqueal(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
