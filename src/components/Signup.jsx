import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './Assets/register.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    password: ''
  })

  // change the state of Register data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData, [name]: value
    }))
  }

  // submit the Register form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = registerData;
    try {
      const url = 'http://localhost:5000/user/create';
      await axios.post(url, payload);
      navigate('/login')
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <div className='back_arrow'>
        <a href='/'><ArrowBackIosNewIcon /></a>
      </div>
      <div className='register_page'>
        <p className='register_text'>Hello! Register to get Started </p>
        <div className='register_form'>
          <form method='POST' onSubmit={handleSubmit} autoComplete="off">
            <TextField
              className='input_field'
              id="outlined-fname-input"
              label="First Name"
              type="text"
              value={registerData.fname}
              onChange={handleChange}
              name='fname'
            />
            <TextField
              className='input_field'
              id="outlined-lname-input"
              label="Last Name"
              type="text"
              value={registerData.lname}
              onChange={handleChange}
              name='lname'
            />
            <TextField
              className='input_field'
              id="outlined-phone-input"
              label="Phone Number"
              type="text"
              value={registerData.phone}
              onChange={handleChange}
              name='phone'
            />
            <TextField
              className='input_field'
              id="outlined-email-input"
              label="Email"
              type="text"
              value={registerData.email}
              onChange={handleChange}
              name='email'
            />
            <TextField
              className='input_field'
              id="outlined-password-input"
              label="password"
              type="password"
              value={registerData.password}
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