
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
	
	
	 <div className="contactBut d-inline justify-content-sm-center">
	
	 			<Link to="/schedule"><button className="btn-dark btn-lg"><i class="fa-solid fa-calendar-days"></i></button></Link>   
        <Link to="/login"><button className="btn-success btn-lg"><i className="fa-solid fa-phone" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover"></i></button></Link>
        <Link to="/login"><button className="btn-primary btn-lg"> <i class="fa-solid fa-envelope"></i></button></Link>
</div>
<div className="About-box">
  <h6>Our mission at Bambi-Lee Cleaning & Home Care is to provide exceptional cleaning services, tailored to the unique 
  needs of Airbnb hosts, small businesses, home owners, renters, and everyone in between! <br />
  We are dedicated to delivering impeccable results, with keen atttention to detail, ensuring our clients' spaces are always pristine and inviting.
  Our mission is not only to clean spaces, but to create environments that inspire the utmost comfort and confidence. </h6>
  </div>
<div className="scope-of-service">
	<img className="Banner" src={banner} alt="banner" />


	<div className="card-container">
<div className="row row-cols-md-1 row-cols-md-2">
  <div className="col">
    <div className="card">
	<img src={Commercial} class="card-img-top" alt="comm" />
      <div className="card-body">
        <h7 className="card-title">Commercial Property Cleaning and Maintenence</h7>
        <Link to="/schedule"><a href="#" className="card-btn btn btn-outline-dark btn-sm"><h6>Book your service!</h6></a></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
	<img src={ShortProp} className="card-img-top" alt="short" />
      <div className="card-body">
        <h7 className="card-title">Airbnb & Short-term Rental Cleaning and Maintenence</h7>
        <Link to="/schedule"><a href="#" className="card-btn btn btn-outline-dark btn-sm"><h6>Convienient scheduling!</h6></a></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
	<img src={Residential} classNae="card-img-top" alt="res" />
      <div className="card-body">
        <h7 className="card-title">Residential Property Cleaning and Maintenence </h7>

        <Link to="/schedule"><a href="#" className="card-btn btn btn-outline-dark btn-sm"><h6>Customize your cleaning!</h6></a></Link>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
	<img src={Organized} className="card-img-top" alt="org" />
      <div className="card-body">
        <h7 className="card-title">Organizational Planning and Implimentation</h7>
        <Link to="/schedule"><a href="#" className="card-btn btn btn-outline-dark btn-sm"><h6>Get organized now!</h6></a></Link>
      </div>
    </div>
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
	  {/* <img className="bottom-left" src={BPrint} alt="bambiprint" /> */}
	  {/* <img className="top-right-a" src={BPrint} alt="bambiprint" />  */}
	   {/* <img className="bottom-left-b" src={BPrint} alt="bambiprint" />
	  <img className="top-left-b" src={BPrint} alt="bambiprint" />
  {/* <img className="bottom-right-b" src={BPrint} alt="bambiprint" /> */}
	 {/* <img className="top-right-b" src={BPrint} alt="bambiprint" />  */}
   </div>
</div>	
	);
};
