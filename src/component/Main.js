import React from 'react'
import { useState } from 'react'
export default function () {
    const [ showlogin ,setshwologin]=useState(false)
  return (
<div className='middlepart1'>
  
      <div className='middle-part'>
      <ul id='signlogo' >
        <li class="tab active"  onClick={()=>setshwologin(false)}>Sign Up</li>
        <li class="tab " onClick={()=>setshwologin(true)}>Log In</li>
      </ul>
       <div class="tab-content" aria-checked="false">
         {showlogin? <div id="login">   
        
          <button className='bifac'><i class="bi  bi-facebook"></i> login With Facebook</button>  <button><i class="bi bi-google"></i>login with Google </button>
          <h5>or</h5>
            <div class="field-wrap">
            <label>
              Email Address
            </label> <br></br>
            <input className='input' type="email"required autocomplete="off"/>
          </div>
          
          <div class="field-wrap">
            <label>
              Password
            </label> <br></br>
            <input className='input' type="password"required autocomplete="off"/>
             <span id='checkbox1'>
                <input id='checkbox' type="checkbox" ></input>Rember Me
               </span>
          </div>
          

          <div className='loginfor'>
          <button class="button  button-block" id='login2'>Log In </button>
          <p class="forgot button-1 " id='forgetpass'><a href="#">Forgot Password?</a></p>
          </div>

        </div>: <div id="signup">   
          <h1>Welcome to Upwardfacingcat!</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et aut impedit sint optio ratione deleniti provident nesciunt iste! Qui facilis non molestiae enim incidunt.
          </p>
        
          <button type="submit" className="button create button-block">Create an account</button>  
         
        </div>  }
        
        
         
         
      </div> 
      </div>
</div>
  )
}
