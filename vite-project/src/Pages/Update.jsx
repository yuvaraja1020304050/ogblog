import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
console.log(id);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    authorname: '',
    blog: '',
    image: '',
    reference: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:3000/read/${id}`);
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        setFormData(data);
      } catch (err) {
        setError('Blog not found!');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.authorname) {
      setError('Title, Description, and Author Name are required!');
      return;
    }

    setUpdating(true);
    try {
      const response = await fetch(`http://localhost:3000/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to update');

      navigate('/Read');
    } catch (err) {
      setError('Update failed!');
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return <h2 className="text-center text-gray-500">Loading...</h2>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold text-center text-blue-700 underline mb-4">Update Your Blog</h1>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Enter Title:</label>
          <input type="text" name="title" value={formData.title} className="border w-full p-2 rounded-md focus:ring focus:ring-blue-300" onChange={handleChange} placeholder="Enter the title" />
        </div>

        <div>
          <label className="block font-semibold">Enter Description:</label>
          <textarea name="description" value={formData.description} className="border w-full p-2 rounded-md focus:ring focus:ring-blue-300" onChange={handleChange} placeholder="Enter the description" />
        </div>

        <div>
          <label className="block font-semibold">Author Name:</label>
          <input type="text" name="authorname" value={formData.authorname} className="border w-full p-2 rounded-md focus:ring focus:ring-blue-300" onChange={handleChange} placeholder="Enter the author's name" />
        </div>

        <div>
          <label className="block font-semibold">Write Blog:</label>
          <textarea name="blog" className="border w-full p-2 rounded-md focus:ring focus:ring-blue-300" value={formData.blog} onChange={handleChange} placeholder="Enter the full content" />
        </div>

        <div>
          <label className="block font-semibold">Image URL:</label>
          <input type="text" name="image" value={formData.image} className="border w-full p-2 rounded-md focus:ring focus:ring-blue-300" onChange={handleChange} placeholder="Provide image URL" />
        </div>

        <div>
          <label className="block font-semibold">Reference:</label>
          <input type="text" name="reference" value={formData.reference} className="border w-full p-2 rounded-md focus:ring focus:ring-blue-300" onChange={handleChange} placeholder="Enter the reference URL" />
        </div>

        <button type="submit" className={`w-full py-2 rounded-full text-white transition ${updating ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'}`} disabled={updating}>
          {updating ? 'Updating...' : 'Update'}
        </button>
      </form>
    </div>
  );
};

export default Update;
