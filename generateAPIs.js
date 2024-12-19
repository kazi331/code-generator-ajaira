const fs = require("fs");
const models = require("./models.json");

const generateModelFile = (modelName, attributes) => {
  const attrs = Object.entries(attributes)
    .map(([key, type]) => `${key}: { type: Sequelize.${type.toUpperCase()} }`)
    .join(",\n    ");

  return `const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ${modelName} = sequelize.define('${modelName}', {
  ${attrs}
});

module.exports = ${modelName};
`;
};

const generateRoutesFile = (modelName) => {
  return `const express = require('express');
const router = express.Router();
const ${modelName} = require('../models/${modelName}');

// CRUD routes for ${modelName}
router.get('/', async (req, res) => {
  const items = await ${modelName}.findAll();
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = await ${modelName}.create(req.body);
  res.json(item);
});

router.get('/:id', async (req, res) => {
  const item = await ${modelName}.findByPk(req.params.id);
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const item = await ${modelName}.update(req.body, {
    where: { id: req.params.id }
  });
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  await ${modelName}.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});

module.exports = router;
`;
};

const generateFiles = () => {
  if (!fs.existsSync("./api/models")) {
    fs.mkdirSync("./api/models");
  }

  if (!fs.existsSync("./api/routes")) {
    fs.mkdirSync("./api/routes");
  }

  Object.entries(models).forEach(([modelName, attributes]) => {
    const modelFile = generateModelFile(modelName, attributes);
    fs.writeFileSync(`./api/models/${modelName}.js`, modelFile);

    const routesFile = generateRoutesFile(modelName);
    fs.writeFileSync(`./api/routes/${modelName}.js`, routesFile);
  });
};

generateFiles();
