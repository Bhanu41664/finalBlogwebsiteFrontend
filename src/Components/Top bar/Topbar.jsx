import React, { useContext } from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';

function Topbar() {
  const {user,dispatch}= useContext(Context)
  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className='top'>
       <div className='topleft'>
       <i class=" topIcons fa-brands fa-square-facebook"></i>
       <i class=" topIcons fa-brands fa-square-youtube"></i>
       <i class= "topIcons fa-brands fa-square-instagram"></i>
       </div>
       <div className='topcenter'>
        <ul className='topList'>
            <li className=' topListItem'>
              <Link to={'/'} style={{textDecoration:'none',color:'inherit'}}>Home</Link>
              </li>
           
            <li className=' topListItem'>
              <Link to={'/'} style={{textDecoration:'none',color:'inherit'}}>About us</Link>
              </li>
              <li className=' topListItem'>
              <Link to={'/'} style={{textDecoration:'none',color:'inherit'}}>Contact</Link>
              </li>
              <li className=' topListItem'>
              <Link to={'/write'} style={{textDecoration:'none',color:'inherit'}}>Write</Link>
              </li>
              
           
           
            <li className=' topListItem' onClick={handleLogout}>{user && 'Logout'}</li>


        </ul>
        </div>
       <div className='topright'>
        {
          user ? (
            <img 
            className='topImage'
            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
          ) :
        
        (
          <>
           <ul className='topList'>

       
           <li className=' topListItem'>
              <Link to={'/login'} style={{textDecoration:'none',color:'inherit'}}>Login</Link>

              </li>
              <li className=' topListItem'>
              <Link to={'/register'} style={{textDecoration:'none',color:'inherit'}}>Register</Link>
              
              </li>
              </ul>
          </>
        )
  }
       
       <i class="TopSearch fa-solid fa-magnifying-glass"></i>
       </div>

        </div>
  )
}

export default Topbar