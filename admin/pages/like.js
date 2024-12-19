import { useState } from 'react';
import axios from 'axios';

const Like = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/like', formData);
  };

  return (
    <div>
      <h1>Create Like</h1>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div>
      <label htmlFor="id">id</label>
      <input type="text" id="id" name="id" />
    </div>
<div>
      <label htmlFor="userId">userId</label>
      <input type="text" id="userId" name="userId" />
    </div>
<div>
      <label htmlFor="postId">postId</label>
      <input type="text" id="postId" name="postId" />
    </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Like;
