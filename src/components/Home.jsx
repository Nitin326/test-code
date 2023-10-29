import React from 'react'
import Money from './Assets/Images/money.jpg'
import './Assets/home.css'



const Home = () => {
  return (
    <div className='homepage'>
        <div className='home_image'>
        <img src={Money} alt="Money" width="300" height="300" />
        </div>
        <div className='home_content'>
        <p className='text'>Spend Smarter <br/> Save More</p>
        <a href='/register'><button className='btn'>Get Started</button></a>
        <p className='login_text'>Alredy Have Account? <a href='/login'>Login</a></p>
        </div>
    </div>
  )
}

export default Home