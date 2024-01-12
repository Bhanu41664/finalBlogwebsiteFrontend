import React from 'react'
import './single.css'
import SinglePost from '../SinglePost/SinglePost'
import Sidebar from '../Sidebar/Sidebar'

function Single() {
  return (
    <div className="single">
        <SinglePost></SinglePost>
        <Sidebar></Sidebar>
    </div>
  )
}

export default Single