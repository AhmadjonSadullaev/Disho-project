import React from 'react'
import { Mainlogin } from './logimstyle.ts'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
<>
   <Mainlogin>
           <h1>User Login</h1>
        <div>
             <input className='input' placeholder='Email here' type="email" />
        </div>
        <div>
            <input className='input' placeholder='password' type="password" name="" id="password" />
        </div>
        <div>
        <Link to={"/"}  style={{textDecoration:"none",color:"white"}}>
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
