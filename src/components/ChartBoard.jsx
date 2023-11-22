import React, { useState, useEffect } from "react";
import "./Assets/charts.css";
import BottomAppBar from './BottomAppBar'
import { AreaChart } from "keep-react";
import DatePicker from "react-datepicker";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";


const ChartBoard = () => {

  const [startDate, setStartDate] = useState(new Date());

  const [expanseData, setExpanseData] = useState({
    totalAmount: 0,
    foodAmount: 0,
    funAmount: 0,
    travelAmount: 0,
    styleAmount: 0,
    otherAmount: 0,
  })

  const chartData = [
    {
      name: "1",
      price: expanseData.foodAmount
    },
    {
      name: "2",
      price: expanseData.funAmount
    },
    {
      name: "3",
      price: expanseData.travelAmount
    },
    {
      name: "4",
      price: expanseData.styleAmount
    },
    {
      name: "5",
      price: expanseData.otherAmount
    }
  ];

  // eslint-disable-next-line
  const fetchData = async () => {
    try {
      const dateObject = new Date(startDate);
      const month = dateObject.getMonth() + 1;
      const year = dateObject.getFullYear();
      const date = dateObject.getDate();
      const token = sessionStorage.getItem('token');
      const url = `http://localhost:5000/dashboard/month?date=${date}-${month}-${year}`;
      const response = await axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      setExpanseData(response.data.expanse)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [startDate])

  return (
    <>
      <BottomAppBar />
      <div className="dashboard">
        <AreaChart
          chartData={chartData}
          dataKey="price"
          chartType="linear"
          showTooltip={true}
          showXaxis={true}
          showYaxis={true}
          showGridLine={true}
        />
        <DatePicker
          className="date_picker"
          selected={startDate} onChange={(date) => {
            setStartDate(date);
          }} />
        <div className="dash_item">
          <p>Total</p>
          <p>{expanseData.totalAmount}</p>
        </div>
        <div className="dash_item">
          <p>Food</p>
          <p>{expanseData.foodAmount}</p>
        </div>
        <div className="dash_item">
          <p>Fun</p>
          <p>{expanseData.funAmount}</p>
        </div>
        <div className="dash_item">
          <p>Travel</p>
          <p>{expanseData.travelAmount}</p>
        </div>
        <div className="dash_item">
          <p>Life-Style</p>
          <p>{expanseData.styleAmount}</p>
        </div>
        <div className="dash_item">
          <p>Other</p>
          <p>{expanseData.otherAmount}</p>
        </div>
      </div>
    </>
  );
};

export default ChartBoard;
