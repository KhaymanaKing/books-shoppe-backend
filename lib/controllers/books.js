const { Router } = require('express');
const { Book } = require('../models/Books');

module.exports = Router()
  .get('/', async (req, res) => {
    const bookData = await Book.getAll();
    res.json(bookData);
  })
  .get ('/:id', async (req, res, next) => {
    try {
      const book = await Book.getById(req.params.id);
      res.json(book);
    } catch(e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const newBook = Book.insert(req.body);
      res.json(newBook);
    } catch (e) {
      next(e);
    }
    
  });
