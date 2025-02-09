import React, { useState, useContext } from 'react';
import { BlogContext } from '../App';

const Create = () => {
  const { store, setStore } = useContext(BlogContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    authorname: '',
    blog: '',
    image: '',
    reference: '',
  });

  const [error, setError] = useState('');

  // Handle input changes dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description } = formData;

    if (!title.trim()) return setError('Title is required!');
    if (!description.trim()) return setError('Description is required!');

    try {
      const response = await fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to save blog');

      const result = await response.json();
      setStore([...store, result]);
      setFormData({ title: '', description: '', authorname: '', blog: '', image: '', reference: '' });
      setError('Blog saved successfully!');
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again!');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 border rounded-md bg-white shadow-lg mt-10 ml-100 ">
      <h1 className="text-2xl font-bold text-blue-800 text-center underline mb-4">
        Create Your Blog
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/** Title */}
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="border rounded-full p-2 w-full"
          value={formData.title}
          onChange={handleChange}
        />

        {/** Description */}
        <textarea
          name="description"
          placeholder="Enter Description (max 50 words)"
          className="border rounded-lg p-2 w-full"
          value={formData.description}
          onChange={handleChange}
        />

        {/** Author Name */}
        <input
          type="text"
          name="authorname"
          placeholder="Author Name"
          className="border rounded-full p-2 w-full"
          value={formData.authorname}
          onChange={handleChange}
        />

        {/** Blog Content */}
        <textarea
          name="blog"
          placeholder="Write your blog content"
          className="border rounded-lg p-2 w-full"
          value={formData.blog}
          onChange={handleChange}
        />

        {/** Image URL */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="border rounded-full p-2 w-full"
          value={formData.image}
          onChange={handleChange}
        />

        {/** Reference Link */}
        <input
          type="text"
          name="reference"
          placeholder="Reference Link (optional)"
          className="border rounded-full p-2 w-full"
          value={formData.reference}
          onChange={handleChange}
        />

        {/** Submit Button */}
        <button
          type="submit"
          className="bg-green-500 text-white rounded-full py-2 hover:bg-green-700 transition duration-300"
        >
          Submit
        </button>

        {/** Error Message */}
        {error && (
          <div className="text-center text-red-600 mt-2">
            <p>{error}</p>
            <button
              className="bg-blue-500 text-white rounded-full py-1 px-4 mt-2 hover:bg-blue-700"
              onClick={() => setError('')}
            >
              OK
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Create;
