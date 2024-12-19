const express = require('express');
const router = express.Router();
const Like = require('../models/Like');

// CRUD routes for Like
router.get('/', async (req, res) => {
  const items = await Like.findAll();
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = await Like.create(req.body);
  res.json(item);
});

router.get('/:id', async (req, res) => {
  const item = await Like.findByPk(req.params.id);
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const item = await Like.update(req.body, {
    where: { id: req.params.id }
  });
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  await Like.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});

module.exports = router;
