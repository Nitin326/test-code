import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './Assets/profile.css';


const UserProfile = () => {
  return (
    <>
      <div className='back_arrow'>
        <a href='/'><ArrowBackIosNewIcon /></a>
      </div>
      <div className='user_profile_container'>
        <div className='user_profile_image'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
            className="rounded-circle img-fluid" alt='user_profile' width='100px' />
        </div>
        <div className='user_profile_details'>
           <p className='user_name'>Nitin Sain</p>
           <p className='user_email'>nitin332709@gmail.com</p>
           <a href='/'><button className='btn'>Logout</button></a>
        </div>
      </div>
    </>
  )
}

export default UserProfile