import React, { useState, useEffect } from 'react'
import './Assets/profile.css';
import BottomAppBar from './BottomAppBar'
import axios from 'axios';


const UserProfile = () => {

  const [profile, setProfile] = useState({});

  const fetchData = async () => {
    try {
      const token = sessionStorage.getItem('token');
      const url = `http://localhost:5000/dashboard/profile`;
      const response = await axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      setProfile(response.data.data)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <BottomAppBar />
      <div className='user_profile_container'>
        <div className='user_profile_image'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
            className="rounded-circle img-fluid" alt='user_profile' width='100px' />
        </div>
        <div className='user_profile_details'>
          <p className='user_name'>{profile.fname + ' ' + profile.lname}</p>
          <p className='user_email'>{profile.email}</p>
          <p className='user_phone'>{profile.phone}</p>
          <a href='/login'><button className='btn'>Logout</button></a>
        </div>
      </div>
    </>
  )
}

export default UserProfile