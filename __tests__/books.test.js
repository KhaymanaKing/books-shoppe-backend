const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { Book } = require('../lib/models/Books');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/books/:id should return a list of book by id', async() => {
    const res = await request(app).get('/books/1');
    expect(res.body).toEqual({
      'id': '1',
      'title': 'Big Trouble',
      'publisher': 'Putnam',
      'release': '1999-09-09'
    });
  });
  xit('/books should return a list of books', async() => {
    const res = await request(app).get('/books');
    const books = await Book.getAll();
    const expected = books.map((book) => {
      return { id: book.id, title: book.title };
    });
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
