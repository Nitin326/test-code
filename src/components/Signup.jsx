import React from 'react'
import TextField from '@mui/material/TextField';
import './Assets/register.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Signup = () => {
  return (
    <>
    <div className='back_arrow'>
      <a href='/'><ArrowBackIosNewIcon/></a>
    </div>
    <div className='register_page'>
        <p className='register_text'>Hello! Register to get Started </p>
        <div className='register_form'>
        <TextField
        className='input_field'
          id="outlined-fname-input"
          label="First Name"
          type="text" 
        />
        <TextField
        className='input_field'
          id="outlined-lname-input"
          label="Last Name"
          type="text" 
        />
        <TextField
        className='input_field'
          id="outlined-phone-input"
          label="Phone"
          type="text" 
        />
        <TextField
          className='input_field'
          id="outlined-email-input"
          label="Email"
          type="text" 
        />
        <TextField
        className='input_field'
          id="outlined-password-input"
          label="password"
          type="password"
        />
        <button type='submit' className='btn'>Register</button>
        </div>
    </div>
    </>
  )
}

export default Signup