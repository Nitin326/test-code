import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './Assets/register.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Signup = () => {

  const [registerData, setRegisterData] = useState({
    fname: '',
    lname: '',
    number: '',
    email: '',
    password: ''
  })

  // change the state of login data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData, [name]: value
    }))
  }

  // submit the login form data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
  }

  return (
    <>
      <div className='back_arrow'>
        <a href='/'><ArrowBackIosNewIcon /></a>
      </div>
      <div className='register_page'>
        <p className='register_text'>Hello! Register to get Started </p>
        <div className='register_form'>
          <form method='POST' onSubmit={handleSubmit}>
            <TextField
              className='input_field'
              id="outlined-fname-input"
              label="First Name"
              type="text"
              value = {registerData.fname}
              onChange={handleChange}
              name = 'fname'
            />
            <TextField
              className='input_field'
              id="outlined-lname-input"
              label="Last Name"
              type="text"
              value = {registerData.lname}
              onChange={handleChange}
              name = 'lname'
            />
            <TextField
              className='input_field'
              id="outlined-phone-input"
              label="Phone"
              type="text"
              value = {registerData.number}
              onChange={handleChange}
              name = 'number'
            />
            <TextField
              className='input_field'
              id="outlined-email-input"
              label="Email"
              type="text"
              value = {registerData.email}
              onChange={handleChange}
              name = 'email'
            />
            <TextField
              className='input_field'
              id="outlined-password-input"
              label="password"
              type="password"
              value = {registerData.password}
              onChange={handleChange}
              name='password'
            />
            <button type='submit' className='btn'>Register</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup