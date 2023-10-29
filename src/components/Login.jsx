import React from 'react'
import TextField from '@mui/material/TextField';
import './Assets/login.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Login = () => {
  return (
    <>
    <div className='back_arrow'>
      <a href='/'><ArrowBackIosNewIcon/></a>
    </div>
    <div className='login_page'>
        <p className='login_text'>Welcome back! Glad to see you, Again! </p>
        <div className='login_form'>
        <TextField
        className='input_field'
          id="outlined-phone-input"
          label="Phone Number"
          type="text"
        />
        <TextField
        className='input_field'
          id="outlined-password-input"
          label="password"
          type="text"
        />
        <button type='submit' className='btn'>Login</button>
        </div>
    </div>
    </>
  )
}

export default Login