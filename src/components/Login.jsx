import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './Assets/login.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Login = () => {

  const [loginData, setLoginData] = useState({
    number: '',
    password: ''
  })

  // change the state of login data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData, [name]: value
    }))
  }

  // submit the login form data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  }


  return (
    <>
      <div className='back_arrow'>
        <a href='/'><ArrowBackIosNewIcon /></a>
      </div>
      <div className='login_page'>
        <p className='login_text'>Welcome back! Glad to see you, Again! </p>
        <div className='login_form'>
          <form method='POST' onSubmit={handleSubmit}>
            <TextField
              className='input_field'
              id="outlined-phone-input"
              label="Phone Number"
              value={loginData.number}
              onChange={handleChange}
              type="text"
              name="number"
            />
            <TextField
              className='input_field'
              id="outlined-password-input"
              label="password"
              value={loginData.password}
              onChange={handleChange}
              type="password"
              name="password"
            />
            <button type='submit' className='btn'>Login</button>\
          </form>
        </div>
      </div>
    </>
  )
}

export default Login