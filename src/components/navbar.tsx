import React from 'react'
import left from '../assess/left.png';
import right from '../assess/right.png';
import { Container, Containers } from './style.ts';
import logo from '../assess/Logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link} from 'react-router-dom';
import Asynchronous from './button.tsx';

const NavbarComponent = () => {
  return (
    <>
        <Container>
             <div style={{display:"flex",alignItems:"center", justifyContent:"space-around"}}>
                
               <img src={left} alt="img" />
               <img src={right} alt="" />
             </div>
         </Container>
        <Containers>
           <div>
               <img src={logo} alt="" />
           </div>
           <div style={{display:"flex", gap:"20px"}}>
   
            <Link to={"/"}  style={{textDecoration:"none",color:"black"}}>
              <p>Home</p>
            </Link>

   
            
            <Link to= {"/shop"} style={{textDecoration:"none",color:"black"}}>
            <p>Shop</p>
            </Link>

            <Link to= {"/page"} style={{textDecoration:"none",color:"black"}}>
              <p>Pages</p>
              </Link>
              <Link to= {"/blog"} style={{textDecoration:"none",color:"black"}}>
              <p>Blog</p>
              </Link>
              <Link to= {"/contact"} style={{textDecoration:"none",color:"black"}}>
              <p>Contact</p>
              </Link>
           </div>
           <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                <Asynchronous/>
                
                   <Link to ={"/login"}>
                <AccountCircleIcon fontSize="large"/>
                </Link>
           
               <AddShoppingCartIcon fontSize="large" color='success'/>
           </div>

        </Containers>


    
    
    
    
    </>
  )
}

export default NavbarComponent;
