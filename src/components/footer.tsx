
import React from 'react'
import { Display, Footer } from './style.ts';
import disho from "../assess/Logo.png";
import face from "../assess/footer/facebook.png";
import insta from "../assess/footer/instagram.png";
import whats from "../assess/footer/whatsapp.png";
import youtube from "../assess/footer/youtube.png";
import linkdin from "../assess/footer/linkedin.png";
import map from "../assess/footer/map.png";
import headset from "../assess/footer/headset.png";

const FooterComponent = () => {
  return (
    <>
       <Footer>
           <Display>
                <div style={{paddingTop:"50px"}}>
                   <img src={disho} alt="" />
                  <p style={{
                     width:"248px",height:"60px"
                  }}
                  >Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus</p>
                  <div style={{display:"flex" ,gap:"30px"}}>
                     <img src={face} alt="img" />
                     <img src={insta} alt="img" />
                     <img src={whats} alt="img" />
                     <img src={youtube} alt="img" />
                     <img src={linkdin} alt="" />
                  </div>
                  <div style={{display:"flex",gap:"10px"}}>
                     <p style={{border:"7px solid white",
                     background:"white",borderRadius:"100px",
                      width:"30px",textAlign:"center"}}>
                      <img src={map} alt="img" /></p>

                      <p style={{width:"190px",
                      background:"white",height:"40px",
                      color:"green"
                    }}>350 Bay Meadows St.
                      Reynoldsburg, OH 43068</p>

                  </div>
                  <div style={{display:"flex", gap:"10px"}}>
                  <p style={{border:"7px solid white",
                     background:"white",borderRadius:"100px",
                      width:"30px",textAlign:"center"}}>
                      <img src={headset} alt="img" /></p>
                      <p style={{width:"190px",
                      background:"white",height:"40px",
                      color:"green"
                    }}>Mon - Fri:9:00 am -  9:00 pm      

                    +1-202-555-0168</p>
                  </div>

  
                </div>
                <div>
                    <h2>Useful Links</h2>
                    <p>About US</p>
                    <p>Contact US</p>
                    <p>Shop By Categorie</p>
                    <p>From The Blog</p>
                    <p>Shopping Cart</p>
                    <p>FAQ,s</p>
                </div>
                <div>
                     <h2>Customer Care</h2>
                     <p>My aacount</p>
                     <p>Payment & Delivery</p>
                     <p>FAQ</p>
                     <p>Customer Support</p>
                     <p>Licenses & Permits</p>
                     <p>Our partners</p>
                </div>
                <div>
                  <h2>Product Categories</h2>
                  <ul>
                     <li>Fruits & Vegatable</li><br />
                     <li>Snacks & Canned Goods</li><br />
                     <li>Careal & Tea</li><br />
                     <li>Coffe & Tea</li><br />
                     <li>Bakery, Flour & Sweeteners</li><br />
                     <li>Oil & Sauces</li>
                  </ul>
                </div>

           </Display>

       </Footer>
    
    
    </>
  )
}

export default FooterComponent
