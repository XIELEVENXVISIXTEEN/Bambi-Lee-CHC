
import React, { Component, useContext, useState } from "react";

import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import BPrint from "../../image/BPrint.png"
import "../../styles/home.css";
import BLogo from "../../image/BLogo.png";
import Headliner from "../../image/Headliner.png";
import Commercial from "../../image/Commercial.png";
import Organized from "../../image/Organized.png";
import Residential from "../../image/Residential.png";
import ShortProp from "../../image/ShortProp.png";
import banner from "../../image/banner.png";



export const Home = () => {


	return(
 <div className="container">
   <div className="App">
     <img className="Headliner justify-content-center" src={Headliner} alt="headliner" />
	
	 <br />
	 <div className="contactBut d-inline justify-content-sm-center">
	
	 			<Link to="/schedule"><button className="btn-dark btn-lg"><i class="fa-solid fa-calendar-days"></i></button></Link>   <button className="btn-success btn-lg"><i className="fa-solid fa-phone"></i> </button>   <button className="btn-primary btn-lg"> <i class="fa-solid fa-envelope"></i></button>
</div>
	<img className="Banner" src={banner} alt="banner" />
	<div class="row">
  <div class="col-sm-3 mb-3 mb-sm-0">
    <div class="card">
	<img src={Commercial} class="card-img-top" alt="comm" />
      <div class="card-body">
        <h5 class="card-title">Commercial Property Cleaning and Maintenence</h5>
        <a href="#" class="btn btn-primary">Book your service!</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
	<img src={ShortProp} class="card-img-top" alt="short" />
      <div class="card-body">
        <h5 class="card-title">Airbnb & Short-term Rental Property Cleaning and Maintenence</h5>
        <a href="#" class="btn btn-primary">Convienient online scheduling!</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
	<img src={Residential} class="card-img-top" alt="res" />
      <div class="card-body">
        <h5 class="card-title">Residential Property Cleaning and Maintenence </h5>
        <a href="#" class="btn btn-primary">Customize your cleaning!</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
	<img src={Organized} class="card-img-top" alt="org" />
      <div class="card-body">
        <h5 class="card-title">Organizational planning and implimentation</h5>
        <a href="#" class="btn btn-primary">Get organized now!</a>
      </div>
    </div>
  </div>
</div>
		

	
	  
  </div>
  

	<div className="bambi-home"> 
       <img className="bottom-left-a" src={BPrint} alt="bambiprint" />
      <img className="top-left" src={BPrint} alt="bambiprint" /> 
	  <img className="top-left-a" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right" src={BPrint} alt="bambiprint" />
	  <img className="top-right" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right-a" src={BPrint} alt="bambiprint" />
	  <img className="bottom-left" src={BPrint} alt="bambiprint" />
	  {/* <img className="top-right-a" src={BPrint} alt="bambiprint" />  */}
	   {/* <img className="bottom-left-b" src={BPrint} alt="bambiprint" />
	  <img className="top-left-b" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right-b" src={BPrint} alt="bambiprint" />
	  <img className="top-right-b" src={BPrint} alt="bambiprint" />  */}
   </div>
</div>	
	);
};
