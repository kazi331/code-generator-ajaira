/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const models = require("./models.json");

const generatePageFile = (modelName, attributes) => {
  const fields = Object.keys(attributes)
    .map(
      (key) => `<div>
      <label htmlFor="${key}">${key}</label>
      <input type="text" id="${key}" name="${key}" />
    </div>`
    )
    .join("\n");

  return `import { useState } from 'react';
import axios from 'axios';

const ${modelName} = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/${modelName.toLowerCase()}', formData);
  };

  return (
    <div>
      <h1>Create ${modelName}</h1>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        ${fields}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ${modelName};
`;
};

const generateFiles = () => {
  if (!fs.existsSync("./admin/pages")) {
    fs.mkdirSync("./admin/pages");
  }

  Object.keys(models).forEach((modelName) => {
    const pageFile = generatePageFile(modelName, models[modelName]);
    fs.writeFileSync(`./admin/pages/${modelName.toLowerCase()}.js`, pageFile);
  });
};

generateFiles();
