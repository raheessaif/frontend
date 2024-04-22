import React from 'react'
import Navigation from './Navigation'
import './Notifications.css'
function Notifications() {
  return (
    <>
    <Navigation/>
    <div className='noti-container'>
      <div className='card-container'>
        <div className='card'>
          <h1 className='card-head'>Notification</h1>
          <p className='card-para'>Notification description</p>
        </div>
        <div className='card'>
          <h1 className='card-head'>Notification</h1>
          <p className='card-para'>Notification description</p>
        </div>
        <div className='card'>
          <h1 className='card-head'>Notification</h1>
          <p className='card-para'>Notification description</p>
        </div>
        <div className='card'>
          <h1 className='card-head'>Notification</h1>
          <p className='card-para'>Notification description</p>
        </div>
        <div className='card'>
          <h1 className='card-head'>Notification</h1>
          <p className='card-para'>Notification description</p>
        </div>
        
       
      </div>
    </div>
    </>
  )
}

export default Notifications