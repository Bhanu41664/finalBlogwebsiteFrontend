import React, { useContext, useState } from 'react'
import "./Write.css"
import axios from 'axios';
import { Context } from '../../context/Context';

function Write() {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("")
  const [file,setFile]=useState(null)
  const [photo,setPhoto]=useState("")
 
  const {user} =useContext(Context)
  const handleImageChange = (e) => {
    const file2 = e.target.files[0];
    
    setFile(file2);
   
  };
  const handleTitle =(e) => {
    setTitle(e.target.value);
  }
  const handleDescription =(e) =>{
    setDesc(e.target.value);
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    
    if(file)
    {
      const formdata=new FormData()
      formdata.append('file',file)
      
      try{
       formdata.forEach(val => console.log(val));
        const result = await axios.post("http://localhost:5000/upload",formdata)
        console.log('Image Uploaded ',result);
        console.log(result.data);
        setPhoto(result.data.path);
        let obj = {
          username:user.username,
          photo:result.data.path,
          title,
          desc,
        }
        const res= await axios.post("http://localhost:5000/api/posts/",obj);
        console.log(res.data);
        res.data && window.location.replace("/post/"+res.data._id);
        
      }
      catch(err)
      {
        console.log("unable to uplaod images");
      }
    }
    // try{
    

    //   // const res= await axios.post("http://localhost:5000/api/posts/",{
    //   //   username:user.username,
    //   //   photo,
    //   //   title,
    //   //   desc,
    //   // })
    //   // res.data && window.location.replace("/post/"+res.data._id);
    //   // console.log(res)
    // }
    // catch(err)
    // {
    //   console.log(err)
    // }
  }
  return (
    <div className='write'>
      {
        file && (

          <img className='writeImg' src={URL.createObjectURL(file)} alt="" />
        )
      }
        <form className="WriteForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:'none'}} onChange={handleImageChange} />
                <input type="text" placeholder='title' className='writeInput' autoFocus={true} onChange={handleTitle} />
            </div>
            <div className="writeFormGroup">
                <textarea  id="" cols="30" rows="10" placeholder='Tell your story...' type="text" className='writeInput writeText' onChange={handleDescription}></textarea>

            </div>
            <button className='writeSubmit' type='submit'>publish</button>

        </form>
    </div>
  )
} 
export default Write