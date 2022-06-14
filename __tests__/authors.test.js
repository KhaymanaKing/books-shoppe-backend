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
    console.log('authors', authors);
    const expected = authors.map((author) => {
      return{
        id: author.id,
        name: author.name,
        dob: author.dob,
        pob: author.pob };
    });
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
