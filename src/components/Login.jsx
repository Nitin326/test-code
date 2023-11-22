import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './Assets/login.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    phone: '',
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = loginData;
    try {
      const url = process.env.REACT_APP_BACKEND_URL + `/user/login`;
      const response = await axios.post(url, payload);
      // set session storage
      sessionStorage.setItem("token", response.data.token);
      // render on profile page
      navigate("/profile");
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <div className='back_arrow'>
        <a href='/'><ArrowBackIosNewIcon /></a>
      </div>
      <div className='login_page'>
        <p className='login_text'>Welcome back! Glad to see you, Again! </p>
        <div className='login_form'>
          <form method='POST' onSubmit={handleSubmit} autoComplete="off">
            <TextField
              className='input_field'
              id="outlined-phone-input"
              label="Phone Number"
              value={loginData.phone}
              onChange={handleChange}
              type="text"
              name="phone"
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
            <button type='submit' className='btn'>Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login