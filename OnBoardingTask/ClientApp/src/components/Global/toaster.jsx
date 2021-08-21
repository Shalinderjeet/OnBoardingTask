import React, { Component } from "react";
import './toaster.css';
const Toaster = (props) => { 
    return (
           <div className="toaster">
           <div className= "toast-block"><p>{props.message}</p></div>
      </div>
    );
  }

export default Toaster;
