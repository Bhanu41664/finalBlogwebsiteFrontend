import React, { useEffect, useState } from 'react'
import Header from '../../Components/header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Posts from '../../Components/Posts/Posts'
import './home.css'
import axios  from "axios";
import { useLocation } from 'react-router-dom'


function Home() {
  const [posts,setPosts]=useState([]);
  const {search}=useLocation();
  console.log(search);
  useEffect(()=>{
    const fetchPost=async ()=>{
      // let url = `http://localhost:5000/api/posts`; 
      // let headers = {
      //   'Access-Control-Allow-Origin':'*'
      // }
      // const res = await fetch(url,{
      //   method:'GET'
      // });
      // const data = await res.json();
      // console.log(data);
     

      
      const res=await axios.get("http://localhost:5000/api/posts"+search)
      setPosts(res.data)
    }
    fetchPost();
  },[search])
  return (
    <>
        <Header/>
        <div className="home">
            <Posts posts={posts} />
            <Sidebar/>
        </div>
    
    </>
  )
}

export default Home