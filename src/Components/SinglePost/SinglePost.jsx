import React, { useEffect, useState, useContext } from 'react'
import './SinglePost.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../context/Context';
function SinglePost() {
  const location=useLocation();
  const path = location.pathname.split('/')[2]
  const [post,setPost]=useState({})
  const time=new Date(post.createdAt)
  const PF="http://localhost:5000/images/"
  const {user} =useContext(Context)
  const [title,setTitle]=useState();
  const [desc,setDesc]=useState();
  const [updateMode,setUpdateMode]=useState(false);
  useEffect(()=>{
    const getpost=async ()=>{
      const res=await axios.get(`http://localhost:5000/api/posts/${path}`)
      setPost(res.data);
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }
    getpost();
  },[path])

 const handleDelete = async ()=>{
  try{

    await axios.delete(`http://localhost:5000/api/posts/${post._id}`,{
      data :{username:user.username},
    })
    window.location.replace('/');
  }
  catch(err)
  {

  }
 }
 const handleUpdate = async()=>{
  try{

    await axios.put(`http://localhost:5000/api/posts/${post._id}`,{
      username:user.username,
      title,
      desc

    })
    window.location.reload('/');
  }
  catch(err)
  {

  }
 }
  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
            {post.photo && (
          <img  className="singlePostImg" src={PF + post.photo} alt="" />

            )}
            {
              updateMode ? <input type='text' className="singlePostTitleInput" value={title} autoFocus  onChange={(e)=>setTitle(e.target.value)} /> :(

          <h1 className="singlePostTitle">
            {post.title}
          
            {post.username === user ?.username &&(
              <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
            <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete} ></i>
            </div>
            )

}
          
          </h1>
              )
            }
            
          <div className="singlePostInfo">
            <span className='singlePostAuthor'>Autor: 
            <Link to={`/?username=${post.username}`} style={{color:'orange', textDecoration:'none'}} >
            <b>{post.username}</b>
            </Link>
            </span>
            <span className='singlePostDate'>{time.toDateString()} </span>



          </div>
          {
            updateMode ? <textarea value={desc} className='singlePostDescInput' onChange={(e)=>setDesc(e.target.value)}></textarea> :(

          <p className='singlePostDesc'>
              {post.desc}
          </p>
            )
          }
          {
            updateMode && <button className="singlePostButton" onClick={handleUpdate}>
            update
          </button>
          }
          
        </div>
        </div>
  )
}

export default SinglePost