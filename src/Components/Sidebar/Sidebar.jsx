import React, { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const [cat, setCat]=useState([])
 
  useEffect(()=>{
    const getCat=async ()=>{
      const res=await axios.get("http://localhost:5000/api/categories")
      setCat(res.data)
    }
    getCat();
  },[])
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">
          ABOUT ME
        </span>
        <img src="https://media.istockphoto.com/id/1654712565/photo/follow-me-a-woman-brought-her-man-on-a-date-in-nature-spend-time-on-the-mountain-lake-kaindy.jpg?s=612x612&w=is&k=20&c=ykGHI4MDynzBXqziCfQiOF-499EgEy5l_UsfN7DSAS4=" alt="" width="300px"
        />
      
        <p>Iam the person who passianted with full stack development. Having the excellent skills in the designing and developing the excellent user Interfaces </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle" >
         CATEGORIES  
        </span>
        <ul className="sidebarList">
          {
            cat.map((c)=>{
              return <Link to={`/?cat=${c.name}`} style={{color:'black', textDecoration:'none'}}>
              <li className="sidebarListItem">{c.name}</li>
              </Link>
              
            })
          }
          

     


        </ul>

      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">
         Follow Us
        </span>
        <div className="sidebarSocial">
        <i class=" sidebarIcons fa-brands fa-square-facebook"></i>
       <i class=" sidebarIcons fa-brands fa-square-youtube"></i>
       <i class= "sidebarIcons fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar