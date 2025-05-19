import React from 'react'
import { Logindv, Mainlogin } from './logimstyle.ts'
import { Link } from 'react-router-dom';
import logo from "../../assess/Logo.png"

const Login = () => {
  return (
<>
            <Logindv>
                <img src={logo} alt="" />
                <div className='buutton'>
                <button>Login in </button>


                </div>
                 
              </Logindv>
   <Mainlogin>
          
           <h1>User Login</h1>
        <div >
     
             <input className='input' placeholder='Email here' type="email" />
        </div>
        <div>
            <input className='input' placeholder='password' type="password" name="" id="password" />
        </div>
        <div>
          <h3 style={{color:"white"}}><a href="https://takeout.google.com/?hl=ko&pli=1" style={{color:"white"}}>Forgot your Password</a></h3>
        </div>
        <div>
        <Link to={"/home"}  style={{textDecoration:"none",color:"white"}}>
           <button className='button' >login in</button>
           </Link>
        </div>
        <div>
           
        </div>
 

   </Mainlogin>


</>
  )
}

export default Login
