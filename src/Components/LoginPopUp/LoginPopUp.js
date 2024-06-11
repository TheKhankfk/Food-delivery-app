import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {

    const [currstate,setCurrState]=useState("Sign Up")

  return (
    <div className='login-popup'>
      <form className='login-popup-container' >
          <div className='login-popup-title' >
             <h2>{currstate}</h2>
             <img onClick={()=>setShowLogin(false)} 
             src={assets.cross_icon} alt='' />
          </div>
          <div className='login-popup-inputs' >
            {currstate==="Login"?<></>:
            <input type='text' required 
            placeholder='Your Name' />}
            <input type='email' required placeholder='Your Email' />
            <input type='password' required placeholder='Your password' />
          </div>
          <button>{currstate==="Sign up"?"Create Account":"login"}</button>
          <div className='login-popup-condition' >
            <input type='checkbox' required />
            <p>By continuing , i agree to terms of use and privacy policy</p>
          </div>
          {currstate==='Login'
          ?<p>Create a new account ?<span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
        :<p>Alraedy have a account ? <span onClick={()=>setCurrState("LogIn")}>Login here</span></p>
        }
          
          
      </form>
    </div>
  )
}

export default LoginPopUp
