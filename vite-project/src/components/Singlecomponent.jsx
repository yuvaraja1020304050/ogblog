import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Singlecomponent = () => {
    const { id } = useParams();
    console.log("Page ID:", id);

    const [onepage, setOnePage] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`http://localhost:3000/Read/${id}`); // Make sure API is correct
                if (!response.ok) {
                    throw new Error("Failed to fetch blog data.");
                }
                const data = await response.json();
                setOnePage(data);
                console.log("Fetched Blog Data:", data); // Debugging
            } catch (err) {
                console.error("Error fetching blog:", err);
                setError("Blog not found or an error occurred.");
            }
        };
        fetchBlog();
    }, [id]);

    if (error) {
        return <h2 className="text-center text-red-500">{error}</h2>;
    }

    if (!onepage) {
        return <h2 className="text-center text-gray-500">Loading...</h2>;
    }

    return (
        <div className="p-6 border rounded-lg shadow-lg bg-white mx-auto max-w-4xl mt-6">
            {/* Title */}
            <h1 className="text-4xl font-bold text-center text-blue-700">{onepage.title || "No Title"}</h1>
            <p className="text-sm text-gray-500 text-center mt-2">Created at: {onepage.id || "Unknown"}</p>

            {/* Blog Image & Content */}
            <div className="flex flex-col md:flex-row gap-6 mt-6">
                {onepage.image ? (
                    <img 
                        className="w-60 rounded-lg shadow-md" 
                        src={onepage.image} 
                        alt={onepage.title || "No Title"} 
                        loading="lazy" 
                    />
                ) : (
                    <p className="text-gray-500 italic">No image available</p>
                )}
                
                <div>
                    <p className="text-gray-700">{onepage.description || "No description available"}</p>
                    <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                </div>
            </div>

            {/* Reference Link */}
            {onepage.reference && (
                <a 
                    href={onepage.reference} 
                    className="text-blue-600 underline block mt-4"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Reference: {onepage.reference}
                </a>
            )}

            {/* Blog Content */}
            <h2 className="font-bold text-lg mt-4">The Blog Content:</h2>
            <p className="text-gray-700">{onepage.blog || "No content available"}</p>

            {/* Actions */}
            <div className="mt-6 flex gap-4">
                <Link className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition" to={`/update/${onepage._id}`}>
                    Update
                </Link>
                <Link className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-700 transition" to={`/delete/${onepage._id}`}>
                    Delete
                </Link>
            </div>

            {/* Comment Box */}
            <textarea 
                className="border-2 w-full mt-6 p-3 rounded-md focus:ring focus:ring-blue-300" 
                placeholder="Leave a comment..."
            />
        </div>
    );
};

export default Singlecomponent;
