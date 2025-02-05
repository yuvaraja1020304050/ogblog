import React, { useState, useEffect } from 'react';
import { useParams ,Link} from 'react-router-dom';
import logo from '../assets/2.jpg'

const Singlecomponent = () => {
    const { id } = useParams();
    const [onepage, setOnePage] = useState({});

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('store'));

        const value = data.find((h) => h.id == id);
        console.log(id);
        if (value) {
            setOnePage(value);  
        }
    }, [id]);

    return (
      <div className="blog-container ml-3 border-5 mt-3">
        {onepage ? (
          <>
            <h1 className='text-4xl ml-40'>{onepage.title}</h1>
            <p><strong>Created at:</strong> {new Date(onepage.id).toLocaleDateString()}</p>
            <div className="blog-description">
              <p>{onepage.description}</p>
            </div>
            <div className='flex justify-between gap-4'>
              <img  className='w-60' src={onepage.image} alt={onepage.title} />
              <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat illo dolore omnis modi voluptas atque facilis, veritatis odit totam incidunt velit nihil minima delectus! Expedita praesentium porro fugit quasi.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat illo dolore omnis modi voluptas atque facilis, veritatis odit totam incidunt velit nihil minima delectus! Expedita praesentium porro fugit quasi.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat illo dolore omnis modi voluptas atque facilis, veritatis odit totam incidunt velit nihil minima delectus! Expedita praesentium porro fugit quasi.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat illo dolore omnis modi voluptas atque facilis, veritatis odit totam incidunt velit nihil minima delectus! Expedita praesentium porro fugit quasi.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat illo dolore omnis modi voluptas atque facilis, veritatis odit totam incidunt velit nihil minima delectus! Expedita praesentium porro fugit quasi.</p>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat illo dolore omnis modi voluptas atque facilis, veritatis odit totam incidunt velit nihil minima delectus! Expedita praesentium porro fugit quasi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat illo dolore omnis modi voluptas atque facilis, veritatis odit totam incidunt velit nihil minima delectus! Expedita praesentium porro fugit quasi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat illo dolore omnis modi voluptas atque facilis, veritatis odit totam incidunt velit nihil minima delectus! Expedita praesentium porro fugit quasi.</p>


            <a href={onepage.refrence} className='underline' target="_blank" rel="noopener noreferrer">
  Reference: Go to Google Search for Messi
</a>


            <h2 className='font-bold'>the blog main content:</h2>
            <p>{onepage.blog}</p>
            <div className='ml-150 mt-25 flex gap-29'>
                <Link className='mb-2 border-2 w-15 rounded-full p-1 bg-blue-300 hover:bg-blue-700' to={`/update/${onepage.id}`}>Update</Link>
                <Link className='mb-2 border-2 w-15 rounded-full p-1 bg-red-300 hover:bg-red-700' to={`/delete/${onepage.id}`}>Delete</Link>
            </div>
            <input type="textarea" className='border-2'/>
            
          </>
        ) : (
          <p>Not having like this...</p>
        )}
      </div>
    );
}

export default Singlecomponent;
