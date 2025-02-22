

import React, { useState } from 'react';
import { FaHome, FaBox, FaUserFriends, FaPhone } from 'react-icons/fa';
import { BiSolidExit } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";
import "frontend/src/styles/sidebarstyle.css";

import logo from "frontend/src/components/logo.gif";
import { useNavigate } from 'react-router-dom';
import { color } from 'chart.js/helpers';

const Sidebar = () => {
  const navigate=useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div 
      className={`sidebar ${isExpanded ? 'expanded' : ''}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
        <div className='logoside'>
          <a href='/'><img className='imagelogo' src={logo}/></a>
          {isExpanded && <a href='/'><span className='logo-title'>StockStack</span></a>}
      </div>
      <ul>
        
        <li>
          <FaHome color='black' size={25} />
          {isExpanded && <span><a href='/home'>Home</a></span>}
        </li>
        <li>
          <FaBox color='black' size={25}  />
          {isExpanded && <span><a href='/orders'>Orders</a></span>}
        </li>
        <li>
          <FaUserFriends color='black' size={25}  />
          {isExpanded && <span><a href='/vendor'>Vendors</a></span>}
        </li>
        <li>
         <IoCallSharp color='black' size={25} />
          {isExpanded && <span><a href='/contact'>Contact</a></span>}
        </li>
      </ul>

      <ul>
        <li>
        <BiSolidExit color='black' size={25} />
            {isExpanded && <span><a href="/">Signout</a></span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;