const express = require('express');
const router = express.Router();
const Country = require('../models/Country');

// CRUD routes for Country
router.get('/', async (req, res) => {
  const items = await Country.findAll();
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = await Country.create(req.body);
  res.json(item);
});

router.get('/:id', async (req, res) => {
  const item = await Country.findByPk(req.params.id);
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const item = await Country.update(req.body, {
    where: { id: req.params.id }
  });
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  await Country.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});

module.exports = router;
