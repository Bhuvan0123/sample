import React from 'react';
import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';
import "frontend/src/styles/contactstyle.css";

function Contact() {
  return (
    <div>
      <Sidebar />
      <div className='contact-container'>
        <h1>Contact Us</h1>
        <p>If you have any questions or need further assistance, please feel free to contact us through any of the following methods:</p>
        
        <h2>Email</h2>
        <p>You can reach us via email at <a href="mailto:support@emart.com">support@emart.com</a>.</p>
        
        <h2>Phone</h2>
        <p>Call us at: <strong>(123) 456-7890</strong></p>
        
        <h2>Address</h2>
        <p>Visit us at our office:</p>
        <address>
          E Mart Grocery Store<br />
          123 Market Street<br />
          City, State, ZIP Code
        </address>
        
        
        
        <h2>Contact Form</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input  type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button id="formsubmit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;