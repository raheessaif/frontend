import React from 'react'
import login from '../Images/login.jpg'
import Google from '../Images/google.png'
import back from '../Images/hi.jpg'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {

    const navigate = useNavigate()

  return (
    <div className='container-div'>
        <img src='https://wallpapercave.com/wp/wp7857731.jpg' className='background-wallpaper' alt='Background' />
        <div className='login-left'>
          <div>
          <h1 className='left-head'>Welcome to LIVE DETECTION</h1>
          <p className='left-para'>Your premier destination for improving speech fluency and confidence. Our cutting-edge app combines stuttering detection with PSS calculation, empowering you to understand your speech patterns and progress with ease. Whether you're seeking to overcome stuttering challenges or simply enhance your communication skills, BetterSpeak provides the tools and support you need. Join us today for a transformative journey towards clearer, more confident speech.</p>
          </div>
          <div>
            <button className='l-contact'>Contact Us</button>
            <button className='l-about'>About Us</button>
          </div>
        </div>
        <div className="login-right">
          <div className='form'>
            <h1 className='login-header'>LOGIN</h1>
            <form className='form1'>
              <label className='lablecss'>Email:</label>
              <input className='inputcss'/>

              <label className='lablecss'>Password:</label>
              <input className='inputcss' type='password'/>
              <button type='submit' onClick={()=>navigate('/livepage')} className='loginbtn'>Login</button>
           
            <label className='sign-up'>Do not have an account. <Link className='click' to="/signup">Click here</Link></label>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login