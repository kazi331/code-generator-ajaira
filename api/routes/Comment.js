const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// CRUD routes for Comment
router.get('/', async (req, res) => {
  const items = await Comment.findAll();
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = await Comment.create(req.body);
  res.json(item);
});

router.get('/:id', async (req, res) => {
  const item = await Comment.findByPk(req.params.id);
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const item = await Comment.update(req.body, {
    where: { id: req.params.id }
  });
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  await Comment.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});

module.exports = router;
