import React from 'react'
import NavbarComponent from '../navbar.tsx';
import FooterComponent from '../footer.tsx';
import { Mainss } from './aboutstyle.ts';



const AboutComponent = () => {
  return (
    <>
     <div><NavbarComponent/></div>
      
      <Mainss >
      
        <div>
        <h1>About Us</h1>
        </div>
      
      </Mainss>
      



      <div><FooterComponent/></div>
    </>
  )
}

export default AboutComponent;