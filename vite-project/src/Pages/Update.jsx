import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createtheblog } from '../App'; 

const Update = () => {
  const { id } = useParams();
  const { store, setstore } = useContext(createtheblog); 
  const navigate = useNavigate(); 

  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [authorname, setauthorname] = useState('');
  const [blog, setblog] = useState('');
  const [image, setimages] = useState('');
  const [reference, setreference] = useState('');
  const [error, seterror] = useState('');

  useEffect(() => {
   
    if (store && id) {
      const data = store.find((val) => val.id === Number(id));
      
      
      if (data) {
        settitle(data.title);
        setdescription(data.description);
        setauthorname(data.authorname);
        setblog(data.blog);
        setimages(data.image);
        setreference(data.reference);
      } else {
        seterror('Blog not found!');
      }
    }
  }, [id, store]);

  const handleSubmit = () => {
    if (!title) {
      seterror('Title is not filled!');
      return;
    }
    if (!description) {
      seterror('Description is not filled!');
      return;
    }

    
    const updatedBlog = {
      title,
      description,
      authorname,
      blog,
      image,
      reference,
      id: Number(id), 
    };

    const updatedStore = store.map((val) =>
      val.id === Number(id) ? updatedBlog : val
    );


    setstore(updatedStore);

    
    localStorage.setItem('store', JSON.stringify(updatedStore));

   
    settitle('');
    setdescription('');
    setauthorname('');
    setblog('');
    setimages('');
    setreference('');
    seterror('');

    
    navigate('/Read');
  };

  return (
    <div className=" h-150 w-150 border-2 ml-100 mt-10">
      <h1 className="title underline ml-50">Update Your Blog</h1>
      {error && <div className="error-message">{error}</div>}
      
      <div className="input-group">
        <label>Enter Title:</label>
        <input
          type="text"
          value={title}
          className=' ml-17 border-2 w-80'
          onChange={(e) => settitle(e.target.value)}
          placeholder="Enter the title"
        />
      </div>

      <div className="input-group">
        <label>Enter Description:</label>
        <textarea
          value={description}
           className=' mt-8 ml-4 border-2 w-80'
          onChange={(e) => setdescription(e.target.value)}
          placeholder="Enter the description"
        />
      </div>

      <div className="input-group">
        <label>Author Name:</label>
        <input
          type="text"
          value={authorname}
          className=' ml-17 border-2 w-80 mt-5'
          onChange={(e) => setauthorname(e.target.value)}
          placeholder="Enter the author's name"
        />
      </div>

      <div className="input-group">
        <label>Write Blog:</label>
        <input
          type="text"
          className=' ml-17 border-2 w-80 mt-5'
          value={blog}
          onChange={(e) => setblog(e.target.value)}
          placeholder="Enter the full content"
        />
      </div>

      <div className="input-group">
        <label>Images for Blog:</label>
        <input
          type="text"
          value={image}
          className=' ml-17 border-2 w-80 mt-5'
          onChange={(e) => setimages(e.target.value)}
          placeholder="Provide image URL"
        />
      </div>

      <div className="input-group">
        <label>Reference:</label>
        <input
          type="text"
          value={reference}
          className=' ml-17 border-2 w-80 mt-5'
          onChange={(e) => setreference(e.target.value)}
          placeholder="Enter the reference URL"
        />
      </div>

      <button className="submit-button bg-green-300 hover:bg-green-500 rounded-full p-2 ml-70 mt-30" onClick={handleSubmit}>
        Update
      </button>
    </div>
  );
};

export default Update;
