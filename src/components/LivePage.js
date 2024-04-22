import React from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import StreamComponent from './StreamComponent';
import { FaExpand } from 'react-icons/fa';
import { Fullscreen, FullscreenExit, Circle } from '@mui/icons-material';
import './Live.css'
import Navigation from './Navigation';
import back from '../Images/hi.jpg'
export default function LivePage() {

    const handleFullScreen = useFullScreenHandle();
    
  return (
    <>
    <Navigation/>
    <img src={back} className='background-wallpaper-live' alt='Background' />
    <div className='live-page-wrapper'>
    
        <div className='live-left'>
          <div>
          <h1 className='left-head'>Welcome to BetterSpeak</h1>
          <p className='left-para'>Your premier destination for improving speech fluency and confidence. Our cutting-edge app combines stuttering detection with PSS calculation, empowering you to understand your speech patterns and progress with ease. Whether you're seeking to overcome stuttering challenges or simply enhance your communication skills, BetterSpeak provides the tools and support you need. Join us today for a transformative journey towards clearer, more confident speech.</p>
          </div>
          <div>
            <button className='l-contact'>Contact Us</button>
            <button className='l-about'>About Us</button>
          </div>
        </div>
        <div className='live-display' >
            <h1 className='live-head'>LIVE</h1>
            <FullScreen handle={handleFullScreen}>
                <StreamComponent/>
            </FullScreen>
            
            <div className='live-actions'>
                <div className='live-full-screen' onClick={handleFullScreen.enter}>
                    <Fullscreen/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
