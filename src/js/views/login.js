import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

import BLContact from "../../image/BLContact.jpg";




export const Login = () => (

    

    <div classname="Business-Card">
       <img className="Bcontact" src={BLContact} alt="bleecontact" />
    </div>
);
