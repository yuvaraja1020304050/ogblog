import React from 'react'
import { useState,useContext } from 'react'
import { createtheblog } from '../App';

const Create = () => {
  const[title,settitle]=useState("");
  const[description,setdescription]=useState("");
  const[authorname,setauthorname]=useState("");
  const[blog,setblog]=useState("");
  const[image,setimages]=useState("");
  const[reference,setreference]=useState("");
  const [error,seterror]=useState("");
  const { store, setstore } = useContext(createtheblog);
  function handleSubmit(){
    if(!title){
      seterror("title is not filled!!!!")
      return
    }
    if(!description){
      seterror("description is not filled")
      return 
    }
    const creative={
      'title':title,
      'description':description,
      'authorname':authorname,
      'blog':blog,
      'image':image,
      'reference':reference,
      'id':Date.now()
    }
    console.log(creative);
    seterror('saved !!! click ok to continue')
    setstore((prevStore) => {
      const addstore=[...prevStore, creative]
      localStorage.setItem('store', JSON.stringify(addstore));
      return addstore
    });
    settitle("");
    setdescription("");
    setauthorname("");
    setblog("");
    setimages("")
    setreference("");


  }
 

  return (
    
   
         <div className='h-150 border-3 w-140 mx-100 my-20 rounded-md'>
         <div className='flex flex-col gap-8 mt-2'>
          <h1 className='font-bold text-blue-800 ml-40 underline'>Create your own blog</h1>
          <div className='flex gap-6 ml-2'>
          <h3 >Enter title:</h3>
          <input className='border-2 rounded-full w-90 ml-10' type="text" onChange={(e)=>settitle(e.target.value)} value={title}  placeholder="    enter the title"/>
          </div>
          <div className='flex gap-4 '>
          <h3 className='pl-1'>Enter Description:</h3>
          <textarea className='border-2 rounded-full w-90'  onChange={(e)=>setdescription(e.target.value)} value={description}  placeholder="    enter the description should be blow 50 words "/>
          </div>
          <div className='flex gap-6 ml-2'>
          <h3 >Author name:</h3>
          <input className='border-2 rounded-full w-90 ml-4' type="text" onChange={(e)=>setauthorname(e.target.value)} value={authorname} placeholder="    enter the Author or the creators name"/>
          </div>
          <div className='flex gap-6 ml-2'>
          <h3 >write blog</h3>
          <input className='border-2 rounded-full w-90 ml-6' type="text"  onChange={(e)=>setblog(e.target.value)} value={blog}  placeholder="    enter the full content "/>
          </div>
          <div className='flex gap-2 '>
          <h3 className='pl-1'>Images for blog:</h3>
          <input className='border-2 rounded-full w-90 ml-8 ' type="text"  onChange={(e)=>setimages(e.target.value)} value={image} placeholder="    give image url "/>
          </div>
          <div className='flex gap-6 ml-2'>
          <h3 >Reference:</h3>
          <input className='border-2 rounded-full w-90 ml-10' type="text"  onChange={(e)=>setreference(e.target.value)} value={reference} placeholder="    enter the attachment"/>
          </div>
         </div>
         <button className='mt-10 mb-2 mx-60 border-2 rounded-full w-20 bg-green-200  p-2 h-10 hover:bg-green-700 cursor-pointer' onClick={handleSubmit} >Submit</button>
         {
            error && <div className='ml-60 '><h2>{error}</h2>
            <button className='border-2 bg-aqua-100 w-20 rounded-full' onClick={()=>{seterror("")}} >OK</button>
            </div>
          }
         </div>
  
   
  )
}

export default Create