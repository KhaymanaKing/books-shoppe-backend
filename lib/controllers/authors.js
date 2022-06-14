const { Router } = require('express');
const { Author } = require('../models/Authors');

module.exports = Router()
  .get('/', async (req, res) => {
    const authorData = await Author.getAll();
    res.json(authorData);
  })
  .get('/:id', async (req, res) => {
    const author = await Author.getById(req.params.id);
    res.json(author);
  });
