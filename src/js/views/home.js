import React from "react";
import BPrint from "/home/officialelevensixteen/Bambi-Lee-CHC/src/image/BPrint.png";
import "../../styles/home.css";

export const Home = () => (
 <div className="container">
	<section className="bambi-home"> <h1>Bambi-Lee<br />
	                                 Cleaning &<br />
									 Home<br />
									 Care<br />
									 </h1>
	  <img className="bottom-left-a" src={BPrint} alt="bambiprint" />
      <img className="top-left" src={BPrint} alt="bambiprint" />
	  <img className="top-left-a" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right" src={BPrint} alt="bambiprint" />
	  <img className="top-right" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right-a" src={BPrint} alt="bambiprint" />
	  <img className="bottom-left" src={BPrint} alt="bambiprint" />
	  <img className="top-right-a" src={BPrint} alt="bambiprint" />
	</section>
 </div>
  
);
