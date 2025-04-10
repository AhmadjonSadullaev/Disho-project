import React, { useState } from 'react'
import NavbarComponent from '../navbar.tsx'
import FooterComponent from '../footer.tsx'
import { BlogContainer, Blogdiv, Blogdivs, Blogemil, Blogimg, Button, Greendv } from './blogstyle.ts';
import ciclelef from "../../assess/circlelef.svg"
import ManageSearchTwoToneIcon from '@mui/icons-material/ManageSearchTwoTone';
import blog2 from "../../assess/blog22.jpg";
import blog3 from "../../assess/blog3.png";
import Allcat from './components/all.tsx';
import Bestsells from './components/bestsells.tsx';
import Recipes from './components/recips.tsx';
import Seasonal from './components/seasonal.tsx';
import market from '../../assess/market.jpg';
import blog1 from '../../assess/blog1.jpg';
import market11 from '../../assess/market11.jpeg'

const Blog = () => {
  const [active,  setActive] = useState("all");
    const handleType =(type) =>{
      setActive(type);
    };
  
  return (
    <>
    <div><NavbarComponent/></div>
    <Blogdiv >
      <p>Home/Blog</p>
    </Blogdiv>

     <BlogContainer>
      
        <div className="blogdiv">
           <div>
             <h2>Categories:</h2>
             <Greendv></Greendv>
           </div>
             <b>
              <p style={{display:"flex",gap:"13px"}}>
                <img src={ciclelef} alt="img" />
                <span onClick={() =>handleType("all")} >All Categories</span>
              </p>
              <p style={{display:"flex",gap:"13px"}}>
                <img src={ciclelef} alt="img" />
                <span onClick={() =>handleType("best")} >Best Sellers</span>
              </p>
              <p style={{display:"flex",gap:"13px"}}>
                <img src={ciclelef} alt="img" />
                <span onClick={() =>handleType("recipes")} >Recipes & Life Hack</span>
              </p>
              <p style={{display:"flex",gap:"13px"}}>
                <img src={ciclelef} alt="img" />
                <span onClick={() =>handleType("seasonal")} >Seasonal</span>
              </p>
             </b>
               <div style={{display:"flex"}}>
                  <input placeholder='search here' className='button' />
                  <button className='button2'><ManageSearchTwoToneIcon/> </button>
               </div>
            <div>
                <h2>Recent Post:</h2>
                <Greendv></Greendv>
                <p className='enjoypost'></p>
            </div>
            <div>
              <h2>Blog Tags:</h2>
              <Greendv></Greendv>
            </div>
             <div className='dvside'>
                <h3 className="pstag">Recipes</h3>
                <h3 className="pstag">Best Sellers</h3>
                <h3 className="pstag">Vegetables</h3>
                <h3 className="pstag">Food Keeping</h3>
                <h3 className="pstag">Drinks</h3>
                <h3 className="pstag">Seasonal</h3>
             </div>
              <div className="derliver">
                  <h2>Delivery Services</h2>
                  <h3 className='phone'>+1-202-555-0168</h3>

              </div>
               <Blogdivs>
                    <div>
                      <h1>This week's hot offer</h1>
                    </div>
                     <div>
                        <img src={blog2} alt="img"  width={345} height={345}/>
                     </div>
                     <div>
                       <img src={blog3} alt="" />
                     </div>
                       <div className='weeeling'>
                          <h2>Weekly Greens Boundle</h2>
                          <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                             <h2><span style={{color:"red"}}>29.99$</span></h2> 
                             <h2><del>49.10$</del></h2>
                          </div>
                             <p>Pretium quam vulputate dignissim suspendisse in est ante. Ac felis donec et odio pellentesque diam</p>
                          
                          
                       </div>
                       <Button>
                        
                           Add to Cart
                       </Button>
               </Blogdivs>
                  


        </div>






        <div className="blogside">
       {active === "all" && <Allcat/>}
        {active === "best" && <Bestsells/>}
        {active === "recipes" && <Recipes/>}
        {active === "seasonal" && <Seasonal/>}
        
        

        </div>
        

     </BlogContainer>
     <Blogimg>
           <img src={market} alt="img" height={319} width={320} />
           <img src={blog1} alt="img" height={319} width={320} />
           <img src={market11} alt="img" height={319} width={640} />
     </Blogimg>
     
      <Blogemil>
           <div>
               <h1>Save  20% on first shopping</h1>
               <p>Sign Up to Newsletter</p>
           </div>
           <div className='bothdv'>
                <input placeholder='Email' className='input' type="email" />
                 <button className='button'>Subscribe</button>
                 
           </div>
      </Blogemil>



     <div><FooterComponent/></div>
    </>
  )
}

export default Blog
