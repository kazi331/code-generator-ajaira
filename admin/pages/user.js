import { useState } from 'react';
import axios from 'axios';

const User = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/user', formData);
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div>
      <label htmlFor="id">id</label>
      <input type="text" id="id" name="id" />
    </div>
<div>
      <label htmlFor="name">name</label>
      <input type="text" id="name" name="name" />
    </div>
<div>
      <label htmlFor="email">email</label>
      <input type="text" id="email" name="email" />
    </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default User;
