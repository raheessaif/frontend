import React, { useState } from 'react'
import './settings.css'
import { ArrowDownOnSquareIcon, ArrowLeftStartOnRectangleIcon, BeakerIcon, CameraIcon, EnvelopeIcon, ExclamationCircleIcon, ExclamationTriangleIcon, FireIcon, PencilIcon, PencilSquareIcon, ShieldExclamationIcon, ShoppingBagIcon, TrashIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
import Switch from 'react-input-switch'
import Navigation from './Navigation'
import { DirectionsRun } from '@mui/icons-material'
function Settings() {
  const navigate = useNavigate()

  const [isCTDChecked, setIsCTDChecked] = useState(false);
    
  return (
    <>
    <Navigation/>
    <div className='main-div'>
        <div className='settings-card'>
            <h1 className='settings-header'>Settings</h1>

            <p className='profile-header'>Profile</p>

            <div className='settings-row'>

                <div className='inner'>
                  <PencilSquareIcon className='logo'/>
                  <lable className='settings-lable'>
                    Edit Profile
                  </lable>
                </div>

                <div className='inner'>
                  <TrashIcon className='logo'/>
                  <lable className='settings-lable'>
                    Delete Profile
                  </lable>
                </div>

            </div>

            <p className='profile-header'>Anomalies</p>

            <div className='settings-row'>

                <div className='inner2'>
                  <div className='inner-left'>
                <FireIcon className='logo2'/>
                  <lable className='settings-lable'>
                    Fire
                  </lable>
                  </div>
                  <Switch/>
                </div>

                <div className='inner2'>
                <div className='inner-left'>
                <ExclamationTriangleIcon className='logo2'/>
                  <lable className='settings-lable'>
                    Illegal parking
                  </lable>
                </div>
                  <Switch />
                </div>

                <div className='inner2'>
                <div className='inner-left'>

                <ShieldExclamationIcon className='logo2'/>
                  <lable className='settings-lable'>
                    Intrusion
                  </lable>
                </div>
                <Switch/>
                </div>

                <div className='inner2'>
                <div className='inner-left'>

                <CameraIcon className='logo2'/>
                  <lable className='settings-lable'>
                    Camera Tampering
                  </lable>
                </div>
                  <Switch on={true} off={false} value={isCTDChecked} onChange={setIsCTDChecked}/>
                </div>

                <div className='inner2'>
                  
                <div className='inner-left'>

                <UserGroupIcon className='logo2'/>
                  <lable className='settings-lable'>
                    Overcrowding
                  </lable>
                </div>
                <Switch/>
                </div>

                <div className='inner2'>
                <div className='inner-left'>

                <DirectionsRun className='logo2'/>
                  <lable className='settings-lable'>
                    Running
                  </lable>
                </div>
                <Switch/>
                </div>

                <div className='inner2'>
                <div className='inner-left'>

                <ShoppingBagIcon className='logo2'/>
                  <lable className='settings-lable'>
                    Abandoned Object
                  </lable>
                </div>
                <Switch/>
                </div>

            </div>

            <p className='profile-header'>More Info And Support</p>

            <div className='settings-row'>

                <div className='inner'>
                <ExclamationCircleIcon className='logo'/>
                  <lable className='settings-lable'>
                    About Us
                  </lable>
                </div>

                <div className='inner'>
                <EnvelopeIcon className='logo'/>
                  <lable className='settings-lable'>
                    Contact Us
                  </lable>
                </div>

            </div>

            <p className='profile-header'>Log Out</p>

            <div className='settings-row'>

                <div className='inner'>
                <ArrowLeftStartOnRectangleIcon className='logo'/>
                  <lable className='settings-lable'>
                    Logout
                  </lable>
                </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default Settings