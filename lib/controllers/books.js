const { Router } = require('express');
const { Book } = require('../models/Books');

module.exports = Router()
  .get('/', async (req, res) => {
    const bookData = await Book.getAll();
    res.json(bookData);
  }
  );
