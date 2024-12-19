const express = require('express');
const router = express.Router();
const User = require('../models/User');

// CRUD routes for User
router.get('/', async (req, res) => {
  const items = await User.findAll();
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = await User.create(req.body);
  res.json(item);
});

router.get('/:id', async (req, res) => {
  const item = await User.findByPk(req.params.id);
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const item = await User.update(req.body, {
    where: { id: req.params.id }
  });
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});

module.exports = router;
