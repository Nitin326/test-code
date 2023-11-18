import React from 'react'
import BottomAppBar from './BottomAppBar'
import FoodIcon from './Assets/Images/food.svg'
import OtherIcon from './Assets/Images/other.svg'
import FunIcon from './Assets/Images/fun.svg'
import StyleIcon from './Assets/Images/style.svg'
import TravelIcon from './Assets/Images/travel.svg';
import ViewIcon from './Assets/Images/view.svg'
import './Assets/payment.css'


const Payment = () => {
  return (
    <>
      <BottomAppBar />
      <div className='filter-box'>
        <div className='filter-field'>
          Food <img src={FoodIcon} className='filter-icon' alt="food icon" height='20px' width='20px' />
        </div>
        <div className='filter-field'>
          Travel <img src={TravelIcon} className='filter-icon' alt="food icon" height='20px' width='20px' />
        </div>
        <div className='filter-field'>
          Fun <img src={FunIcon} className='filter-icon' alt="food icon" height='20px' width='20px' />
        </div>
        <div className='filter-field'>
          Life Style <img src={StyleIcon} className='filter-icon' alt="food icon" height='20px' width='20px' />
        </div>
        <div className='filter-field'>
          Other <img src={OtherIcon} className='filter-icon' alt="food icon" height='20px' width='20px' />
        </div>
      </div>
      <div className='payment-history'>
        <div className='payment-block'>
          <div>Category</div>
          <div>Date</div>
          <div>$100</div>
        </div>
        <div className='payment-block'>
          <div>Category</div>
          <div>Date</div>
          <div>$100</div>
        </div>
      </div>
    </>
  )
}

export default Payment