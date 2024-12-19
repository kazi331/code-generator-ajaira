const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// CRUD routes for Post
router.get('/', async (req, res) => {
  const items = await Post.findAll();
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = await Post.create(req.body);
  res.json(item);
});

router.get('/:id', async (req, res) => {
  const item = await Post.findByPk(req.params.id);
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const item = await Post.update(req.body, {
    where: { id: req.params.id }
  });
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});

module.exports = router;
