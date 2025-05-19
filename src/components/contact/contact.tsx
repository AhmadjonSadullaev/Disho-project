import React from 'react';

import NavbarComponent from '../navbar.tsx';
import FooterComponent from '../footer.tsx';
import { Image } from './contactstyle.ts';
import cons1 from "../../assess/cons1.jpg"
import { KakaoMap } from '../ KakaoMap./kakaomap.tsx';



const Contact = () => {
  return (
  <>
  <div><NavbarComponent/></div>
  
  <div>
  <Image src={cons1} alt='image'></Image>
    
 <div>
 <KakaoMap/>
 </div>

  </div>
    




    

   




   
    
    
   <div><FooterComponent/></div>
   </>
   
  )
}

export default Contact;


