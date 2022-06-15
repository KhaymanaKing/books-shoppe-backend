-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS authors CASCADE;
DROP TABLE IF EXISTS author_book CASCADE;

CREATE TABLE books ( 
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR,
    publisher VARCHAR,
    release INT
);

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    dob INT,
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
('Big Trouble', 'Putnam', '1999' ),
('Name of the Wind', 'DAW Books', '2007'),
('The Wise Mans Fear', 'DAW Books', '2011'),
('John Dies at the End', 'Thomas Dunne Books', '2012'),
('This Book is Full of Spiders', 'Thomas Dunne Books', '2013');

INSERT INTO authors (
    name,
    dob,
    pob
)
VALUES

('Dave Barry', '1947', 'Armonk, New York'),
('Patrick Rothfuss', '1973', 'Madison, Wuscibsub'),
('Jason Pargin', '1974', 'Lawrenceville, Illinois');

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