import React from 'react'
import NavbarComponent from '../navbar.tsx';
import FooterComponent from '../footer.tsx';
import { Div } from './shopcart.ts';

const Shopcart = () => {
  return (
    <>
     <div><NavbarComponent/></div>
     
     <Div>
      <div className='wapperdiv'>
         <h3>Shopping Cart :</h3>

      </div>
         <div className='ballance'>
            <h3>Balance:</h3>
         </div>

     </Div>
   


  <div><FooterComponent/></div>
    </>
  )
}

export default Shopcart;