import React from "react";
import "./Assets/charts.css";
import BottomAppBar from './BottomAppBar'

const ChartBoard = () => {
  return (
    <>
      <BottomAppBar />
      <div className="dashboard">
        <div className="dash_item">
          <h3>Food</h3>
          <p>400</p>
        </div>
        <div className="dash_item">
          <h3>Food</h3>
          <p>400</p>
        </div>
        <div className="dash_item">
          <h3>Food</h3>
          <p>400</p>
        </div>
        <div className="dash_item">
          <h3>Food</h3>
          <p>400</p>
        </div>
      </div>
    </>
  );
};

export default ChartBoard;
