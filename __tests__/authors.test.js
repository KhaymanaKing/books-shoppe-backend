const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { Author } = require('../lib/models/Authors');
describe('author routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/authors should return a list of authors', async() => {
    const res = await request(app).get('/authors');
    const authors = await Author.getAll();
    const expected = authors.map((author) => {
      return{
        id: author.id,
        name: author.name,
        dob: author.dob,
        pob: author.pob };
    });
    expect(res.body).toEqual(expected);
  });
  it('/authors/:id should return an author with list of books', async () => {
    const res = await request(app).get('/authors/1');
    expect(res.body).toEqual({
      'id': expect.any(String),
      'name': expect.any(String),
      'dob': expect.any(Number),
      'pob': expect.any(String),
      'books': expect.arrayContaining([{
        'id': expect.any(Number),
        'title': expect.any(String),
        'publisher': expect.any(String),
        'release': expect.any(Number)
      }])
    });
  });
  afterAll(() => {
    pool.end();
  });
});
