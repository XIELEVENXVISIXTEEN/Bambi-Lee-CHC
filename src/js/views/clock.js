import React, { Component, useContext, useState } from "react";

import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/clock.css";

export const Clock = ({counter}) => {
   const now = new Date();

   const year = now.getFullYear();
   const month = ("0" + (now.getMonth() + 1)).slice(-2);
   const day = ("0" + now.getDate()).slice(-2);
   
   const hour = ("0" + now.getHours()).slice(-2);
   const minute = ("0" + now.getMinutes()).slice(-2);
   const second = ("0" + now.getSeconds()).slice(-2);
   
   // YYYY-MM-DD hh:mm:ss
   const formatted = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
return(
<div className="clock-mount">
<div className="date">
      <span className="month">{month}</span>
      /
      <span className="day">{day}</span>
      /
      <span className="year">{year}</span>
  </div>
    <div className="clock_container">
      <div className="time">
      <span className="hour">{hour}</span>
      :
      <span className="minute">{minute}</span>
    
      </div>
</div>
</div>
);
};
