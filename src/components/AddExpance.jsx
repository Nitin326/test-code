import React from 'react'
import TextField from '@mui/material/TextField';
import './Assets/expance.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const AddExpance = () => {
    return (
        <>
            <div className='back_arrow'>
                <a href='/'><ArrowBackIosNewIcon /></a>
            </div>
            <div className='expance_container'>
                <form className='expance_form'>
                    <TextField
                        className='input_field'
                        id="outlined-phone-input"
                        label="Amount"
                        type="number"
                    />
                    <TextField
                        className='input_field'
                        id="outlined-description-input"
                        label="Description"
                        type="text"
                    />
                    <TextField
                        className='input_field'
                        id="outlined-description-input"
                        label="Categorty"
                        type="text"
                    />
                    <select className='select input_field'>
                        <option value = "" disabled selected>Choose Category</option>
                        <option value="1">Food</option>
                        <option value="2">Transportation</option>
                        <option value="3">Entertainment</option>
                    </select>
                    <TextField
                        className='input_field date_field'
                        id="outlined-description-input"
                        type="date"
                    />
                    <select className='select input_field'>
                        <option value="" disabled selected>Choose Payment Method</option>
                        <option value="1">Food</option>
                        <option value="2">Transportation</option>
                        <option value="3">Entertainment</option>
                    </select>
                    <button type='submit' className='btn'>Add</button>
                </form>
            </div>
        </>
    )
}

export default AddExpance