import { useState, useEffect } from 'react';
import axios from 'axios';
import '/src/styles/customerSection.css';

function CustomerComments() {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: '', comment: '', image: null });

  useEffect(() => {
    axios.get('http://localhost:5000/api/comments')
      .then(res => setComments(res.data));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('comment', form.comment);
    formData.append('image', form.image);

    const res = await axios.post('http://localhost:5000/api/comments', formData);
    setComments([res.data, ...comments]);
    setForm({ name: '', comment: '', image: null });
  };

  return (
    <div className="customer-comments">
      <h1>Our Customers</h1>
      <form onSubmit={handleSubmit} className="comment-form">
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <textarea name="comment" placeholder="Your Comment" value={form.comment} onChange={handleChange} required />
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>

      <div className="comment-list">
        {comments.map((c, index) => (
          <div className="comment-card" key={index}>
            <img src={`http://localhost:5000${c.image}`} alt={c.name} />
            <p><strong>{c.name}</strong>: {c.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerComments;
