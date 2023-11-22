import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './Assets/expance.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddExpance = () => {

    const navigate = useNavigate();

    const [expanceData, setExpanceData] = useState({
        amount: 0,
        description: '',
        category: '',
        date: '',
        mode: ''
    })

    // change the state of expance data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpanceData((prevData) => ({
            ...prevData, [name]: value
        }))
    }

    // submit the expance form data
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = expanceData;
        const token = sessionStorage.getItem('token');
        payload.amount = parseInt(payload.amount)
        try {
            const url = 'http://localhost:5000/expanse';
            await axios.post(url, payload, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            // navigate to payment page
            navigate("/payment");
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <div className='back_arrow'>
                <a href='/payment'><ArrowBackIosNewIcon /></a>
            </div>
            <div className='expance_container'>
                <form className='expance_form' method='POST' onSubmit={handleSubmit} >
                    <TextField
                        className='input_field'
                        id="outlined-phone-input"
                        label="Amount"
                        type="number"
                        name="amount"
                        value={expanceData.amount}
                        onChange={handleChange}
                    />
                    <TextField
                        className='input_field'
                        id="outlined-description-input"
                        label="Description"
                        type="text"
                        name='description'
                        value={expanceData.description}
                        onChange={handleChange}
                    />
                    <select className='select input_field' name='category' onChange={handleChange}>
                        <option value="">Choose Category</option>
                        <option value="Food">Food</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="lifeStyle">Life Style</option>
                        <option value="Other">Other</option>
                    </select>
                    <TextField
                        className='input_field date_field'
                        id="outlined-description-input"
                        type="date"
                        name='date'
                        value={expanceData.date}
                        onChange={handleChange}
                    />
                    <select className='select input_field' name='mode' onChange={handleChange}>
                        <option value="">Choose Payment Method</option>
                        <option value="Phonepay">Phone Pay</option>
                        <option value="Gpay">Google Pay</option>
                        <option value="Amazonpay">Amazon Pay</option>
                        <option value="Other">Other</option>
                    </select>
                    <button type='submit' className='btn'>Add</button>
                </form>
            </div>
        </>
    )
}

export default AddExpance