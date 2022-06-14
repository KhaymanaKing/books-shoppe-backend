const pool = require('../utils/pool');
class Book {
  id;
  title;
  publisher;
  release;

  constructor(row){
    this.id = row.id;
    this.title = row.title;
    this.publisher = row.publisher;
    this.release = row.release;
    this.authors = row.authors && row.authors;
  }
  static async getAll(){
    const { rows } = await pool.query('SELECT * from books');
    return rows.map((row) => new Book(row));
  }
  static async getById(id){
    const { rows } = await pool.query (
      `SELECT
        books.*,
        COALESCE(
          json_agg(to_jsonb(authors)) 
          FILTER (WHERE authors.id is not null), '[]'
          ) as authors
          FROM books
          LEFT JOIN author_book on books.id = author_book.book_id
          LEFT JOIN authors on author_book.author_id = authors.id
          WHERE books.id =$1
          GROUP BY books.id;`,
      [id]
    );
    return new Book(rows[0]);
  }

}

module.exports = { Book };
