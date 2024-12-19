import { useState } from 'react';
import axios from 'axios';

const Country = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/country', formData);
  };

  return (
    <div>
      <h1>Create Country</h1>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div>
      <label htmlFor="id">id</label>
      <input type="text" id="id" name="id" />
    </div>
<div>
      <label htmlFor="name">name</label>
      <input type="text" id="name" name="name" />
    </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Country;
