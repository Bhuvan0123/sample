import React from 'react'
import "frontend/src/styles/navistyle.css"

import logo from "frontend/src/components/logo.gif";
function NavigationBar() {
  return (
    <div className="navibar">
       <div className="logo"> 
            <img src={logo}alt='Hello'/>
            <a href="/" id="ssn">StockStack</a>
        </div>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/vendor">Vendors</a></li>
            <li><a href='/orders'>Orders</a></li>
            <li><a href="/contact">Contact</a></li>

        </ul>
    </div>

  );
}

export default NavigationBar