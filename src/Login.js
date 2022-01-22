import React, { useState } from 'react';
import './styles/login.css'
import bg from './assets/images/loginimage.svg'
function Login() {
  const [username, setusername] = useState('')
  const [password, setPassword] = useState('')
  return(
    <div className='container'>
      <div className='bg-img'> 
       <img className='image' src={bg}/>
      </div>
   <div className='login'>
     <div className='header'>
      <h1 className='headerText'>teamwork</h1>
     </div>

     <div className='siginDiv'>
     <div className='signintext'>Sign in</div>
     <div className='descText'>Stay connected with your colleagues</div>
     </div>

    <form className='form'>
     <div className='emailDiv'>
     <h1>Email or Username <span className='red'>*</span></h1>
     <input className='inputBox' value={username} onChange={(e)=> setusername(e.target.value)} placeholder='Enter your email or username here'/>
     </div>
     <div className='emailDiv'>
     <h1>Password <span className='red'>*</span></h1>
     <input className='inputBox' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter your password here'/>
     </div>
    <button className='button'>Submit</button>

    </form>
     </div>    
    </div>
  )
}

export default Login;
