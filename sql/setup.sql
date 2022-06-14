-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS authors CASCADE;
DROP TABLE IF EXISTS author_book CASCADE;

CREATE TABLE books ( 
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR,
    publisher VARCHAR,
    release DATE
);

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    dob DATE,
    pob VARCHAR
);

CREATE TABLE author_book(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    book_id BIGINT,
    author_id BIGINT,
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (author_id) REFERENCES authors(id)
);

INSERT INTO books (
    title,
    publisher,
    release
)
VALUES 
('Big Trouble', 'Putnam', '1999-09-09' ),
('Name of the Wind', 'DAW Books', '2007-03-27'),
('The Wise Mans Fear', 'DAW Books', '2011-03-01'),
('John Dies at the End', 'Thomas Dunne Books', '2012-12-24'),
('This Book is Full of Spiders', 'Thomas Dunne Books', '2013-10-08');

INSERT INTO authors (
    name,
    dob,
    pob
)
VALUES

('Dave Barry', '1947-07-03', 'Armonk, New York'),
('Patrick Rothfuss', '1973-06-06', 'Madison, Wuscibsub'),
('Jason Pargin', '1974-01-10', 'Lawrenceville, Illinois');

INSERT INTO author_book(
    book_id,
    author_id
)
VALUES
(1, 1),
(2, 2),
(3, 2),
(4, 3),
(5, 3);