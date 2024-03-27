import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/schedule.css"



export const Schedule = () => (
  
  
  <div>
    <div className="container-cal">
    <iframe className="calendar" src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2y05ud25ySsY9s1WdRRGhJabXAjKz9X6oGPTfItUa-TU8IE7BcQRhW378XZ59PMkOOvafFpQzt?gv=true"></iframe>
    </div>
  </div>


  


  

  );
