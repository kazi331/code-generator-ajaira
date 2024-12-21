const express = require('express');
const router = express.Router();
const message = require('../models/message');

// CRUD routes for message
router.get('/', async (req, res) => {
  const items = await message.findAll();
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = await message.create(req.body);
  res.json(item);
});

router.get('/:id', async (req, res) => {
  const item = await message.findByPk(req.params.id);
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const item = await message.update(req.body, {
    where: { id: req.params.id }
  });
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  await message.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});

module.exports = router;
