import React,{ useState } from 'react'
import './LoginForm.css'
import person_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'


const LoginForm = () => {
    const [action,setAction] = useState("Sign Up");
  return (
    <div className ='container'>
      <div className ="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
        <img src={person_icon} alt="" />
        <input type="text"placeholder='Username' />
        </div>}
      
        <div className="input">
        <img src={email_icon} alt="" />
        <input type="email" placeholder='email address' />
      </div>
      
        <div className="input">
        <img src={password_icon } alt="" />
        <input type="password" placeholder='password' />
      </div>
    </div>
    {action==="Sign Up"?<div></div>:<div className="forget-password">Forget password?<span> Click here</span></div>} 
    <div className="submit-container">
      <div className={action==="Login"?"submit gray":"submit"} onClick={()=>[setAction("Sign Up")]}> Signup </div>
      <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>[setAction("Login")]}> Login </div>
      </div>

    </div>

  );
}

export default LoginForm;