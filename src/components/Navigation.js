import React, { useState } from 'react'
import './Navigation.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { Cog6ToothIcon } from '@heroicons/react/24/solid';

function Navigation() {

    const navigate = useNavigate();
    const navigations = [
        { name:'Live Page' , href: '/livepage'},
        { name:'Notifications' , href: '/notifications'},
        { name:'Settings', href:'/settings', icon: Cog6ToothIcon},
      ];
      

    return (
    <div className='nav-container'>

        <h1 className='nav-header'>Navigation</h1>

        <div className='buttons-div'>

        {navigations.map((item) => (
          <NavLink
          to={item.href}
          className={({isActive}) => {
          return (isActive ? 'btn-active' : 'btn-inactive') 
          }} 
          >
          {item.name}
          </NavLink>
        ))}

        </div>
    </div>
  )
}

export default Navigation