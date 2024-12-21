import { useState } from 'react';
import axios from 'axios';

const message = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/message', formData);
  };

  return (
    <div>
      <h1>Create message</h1>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div>
      <label htmlFor="id">id</label>
      <input type="text" id="id" name="id" />
    </div>
<div>
      <label htmlFor="content">content</label>
      <input type="text" id="content" name="content" />
    </div>
<div>
      <label htmlFor="userId">userId</label>
      <input type="text" id="userId" name="userId" />
    </div>
<div>
      <label htmlFor="receiverId">receiverId</label>
      <input type="text" id="receiverId" name="receiverId" />
    </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default message;
