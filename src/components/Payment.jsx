import React, { useEffect, useState } from 'react'
import BottomAppBar from './BottomAppBar'
import FoodIcon from './Assets/Images/food.svg'
import OtherIcon from './Assets/Images/other.svg'
import FunIcon from './Assets/Images/fun.svg'
import StyleIcon from './Assets/Images/style.svg'
import TravelIcon from './Assets/Images/travel.svg';
import './Assets/payment.css'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';

const Payment = () => {

  const [payments, setPayments] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');
  const [hasMore, setHasMore] = useState(true);
  let [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const token = sessionStorage.getItem('token');
      const url = process.env.REACT_APP_BACKEND_URL + `/expanse?${filterQuery}=${filterQuery}&page=${page}`;
      const response = await axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });

      // Check if there is more data
      if (response.data.data.length === 0) {
        setHasMore(false);
      }

      // Update the state with the new data
      setPayments([...payments, ...response.data.data]);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [filterQuery])

  const setFilter = (value) => {
    page = 1;
    setPage(page)
    setPayments([])
    setFilterQuery(value)
  }

  const loadMoreData = () => {
    // Fetch more data when scrolling to the end
    page = page + 1;
    setPage(page);
    fetchData();
  };

  return (
    <>
      <BottomAppBar />
      <div className='filter-box'>
        <div className='filter-field'>
          <div className='filter-container' onClick={() => setFilter('food')}>
            <span>Food</span>
            <img src={FoodIcon} className='filter-icon' alt="food icon" height='20px' width='20px' />
          </div>
        </div>
        <div className='filter-field' onClick={() => setFilter('travel')}>
          <div className='filter-container'>
            <span>Travel</span>
            <img src={TravelIcon} className='filter-icon' alt="food icon" height='20px' width='20px' />
          </div>
        </div>
        <div className='filter-field' onClick={() => setFilter('fun')}>
          <div className='filter-container'>
            <span>Fun</span>
            <img src={FunIcon} className='filter-icon' alt="food icon" height='20px' width='20px' />
          </div>
        </div>
        <div className='filter-field' onClick={() => setFilter('lifeStyle')}>
          <div className='filter-container'>
            <span>Life Style</span>
            <img src={StyleIcon} className='filter-icon' alt="food icon" height='20px' width='20px' />
          </div>
        </div>
        <div className='filter-field' onClick={() => setFilter('other')}>
          <div className='filter-container'>
            <span>Other</span>
            <img src={OtherIcon} className='filter-icon' alt="food icon" height='20px' width='20px' />
          </div>
        </div>
        <div className='filter-field' onClick={() => setFilter("")}>
          <div className='filter-container'>
            <span>All</span>
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={payments.length}
        next={loadMoreData}
        hasMore={hasMore}
      >
        <div className='payment-history'>
          {
            payments.map((item, index) => {
              return (
                <div key={index} className='payment-block'>
                  <div>{item.category}</div>
                  <div>{item.date}</div>
                  <div>{item.amount}</div>
                </div>
              )
            })
          }
        </div>
      </InfiniteScroll>
    </>
  )
}

export default Payment