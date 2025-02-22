import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'frontend/src/styles/loginstyle.css'
function Login() {
    const navigate = useNavigate();
    function handleSubmit(){
        navigate('/home');
    }
  return (
    <div className='login-container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input id="usernameinput" type="text" placeholder="Enter your username" />
            <br/>
            <input id="passwordinput" type="password" placeholder="Enter your password" />
            <br/>
            <button id="loginbutton" type="submit">Login</button>
            <p id="forgetpass">Forget password? <span id="clickhere">Click Here</span></p>
        </form>
    </div>
  )
}

export default Login