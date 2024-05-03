import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div className='nav'>
        <div>
        <NavLink to={'/'}>
        <h3 style={{color:'black',fontWeight:'bold',fontSize:'20px'}}>Food <span style={{color:'blue'}}>Recipe</span></h3></NavLink>
        </div>
        <div className='spec'>
        
        <NavLink to={'/'}>   <h3 style={{color:'black',fontWeight:'bold'}}>Home</h3></NavLink>
        <NavLink to={'/favourite'}>    <h3 style={{color:'blue',fontWeight:'bold'}}>Favourites</h3></NavLink>
        </div>
    </div>
  )
}

export default Navbar