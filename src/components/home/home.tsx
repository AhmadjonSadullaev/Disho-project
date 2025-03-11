import React from 'react';
import NavbarComponent from '../navbar.tsx';
import FooterComponent from '../footer.tsx';
import '../home/style.css';
import img from '../../assess/badge.png';
import { Boxs, Btn, Continer, Grid, Homediv, Homeimg, Homeshop, Mainbutton, Maincon, Maindv, Pic, Smallbox, Smalldiv, } from './homestyle.ts';
import photo1 from '../../assess/1.png';
import photo2 from '../../assess/2.png';
import photo3 from '../../assess/3.png';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import qul from '../../assess/qul.jpeg';
import avocado from "../../assess/avacado.jpeg";
import boundle from "../../assess/boundle.jpeg";
import onion from "../../assess/onion.jpeg";
import watermelon from "../../assess/watermelon.jpeg";
import basket from "../../assess/basket.png";
import sale from "../../assess/sale.jpeg";
import img1 from "../../assess/footer/img2.jpeg";


import mockFruits, { Fruit } from '../mock/fruit.ts';
import cerealAndBakery, { Product } from '../mock/cereal.ts';
import herbsAndSpices, { Herb } from '../mock/spices.ts';



const HomeComponent = () => {
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
   
   

  return (
    <div>
       <div>
         <NavbarComponent/>
       </div>
       <div>
          
       <Homeimg>
                <div >
                  <div style={{display: "flex"}}>
                  <div className='homepage'>
                   <h1 style={{fontWeight:"400", fontSize:"52px",}}>Check out best Weekly Prices</h1>
                   <p>Pelleentes  Lorem . Proin hendreit ,velit vitae vehicula vulputate</p>
                   <div style={{gap:"20px"}}>
                      <button className='btn'>View sale</button>
                      <button>Shop all</button>
                   </div>
                  </div> 
                  <div >
                      <div className='image1'>
                          <img src={img} alt="img" />
                      </div>
                  
                        
              
                    </div>
                   </div>
                </div>
                
                
          </Homeimg>
            <Maincon>
            <Continer>
                <div style={{textAlign:'center'}}>
                    <h1>Best Sellers This Week</h1>
                    <p>Pretium quam vulputate dignissim suspendisse in est ante. Ac felis donec et odio pellentesque diam

                    </p>
                </div>
                <div>
                    <img src={photo1} alt="img"/>
                    <img src={photo2} alt="img" />
                    <img src={photo3} alt="img" />

                </div>
                <div style={{display: 'flex', alignItems:'center',gap:'30px'}}>
                     <Smalldiv>
                        <div style={{textAlign:'center'}}>
                        <h2>This week's hot offer</h2>
                        </div>
                           <Btn>

                              <img  src={img1} alt="" />

                              <h2 style={{color:"coral"}}>Only Sale this weak</h2>
                           </Btn>
                            <Boxs>
                                 <div style={{textAlign:"center"}}>
                                   <h3>Weekly Greens Boundle</h3>
                                 
                                 <div style={{textAlign:"center"}} >
                                    <p style={{display:"flex",gap:"50px",textAlign:"center"}}><span style={{color:"red"}}>
                                      <h2>$29.99</h2></span> <del><h2>$49.99</h2></del></p>
                                 </div>
                                 <div>
                                    <p>Pretium quam vulputate dignissim suspendisse in est ante. Ac felis donec et odio pellentesque diam
                                    
                                    </p>
                                 </div>
                                  </div>
                                
                                 <Mainbutton>
                                 <img src={basket} alt="" />Add to Cart
                                 </Mainbutton>
                              
                                  
                                  
                                  
                            </Boxs>
                           
                     </Smalldiv>

                    <Homediv>
                         <div style={{textAlign:'center'}}>
                             <h2>Fruits & Vegetables</h2>
                         </div>
                        <Grid>
                         <Pic>
                          <img sizes='' src={qul} alt="img" />
                            <p style={{textAlign:"center"}}>Fresh Strawberry</p>
                             <h2 style={{textAlign:"center"}}><span style={{color:"red"}}>$8.99</span><del>$12.99</del></h2>
                         </Pic>
                         <Pic>
                       <img src={avocado} alt="img" />
                       <p style={{textAlign:"center"}}>Avocado </p>
                       <h2 style={{textAlign:"center"}}><span style={{color:"red"}}>$8.99</span><del>$12.99</del></h2>

                         </Pic>
                         <Pic>
                           <img src={sale} alt="" />
                          
                         <button className='btn1'><img src={basket} alt="" />Add to Cart</button>
                             </Pic>
                         <Pic>
                         <img src={boundle} alt="img" />
                         <p style={{textAlign:"center"}}>Vegetable Boundle
                         </p>

                       <h2 style={{textAlign:"center"}}>8.99</h2>

                         </Pic>
                        
                         <Pic>
                             <img src={onion} alt="img" />
                              <p style={{textAlign:"center"}}>Onion
                              </p>
                              <h2 style={{textAlign:"center"}}>$1.12</h2>
                         </Pic>
                         <Pic>
                            <img src={watermelon} alt="img" />
                            <p style={{textAlign:"center"}}>Watermelon
                            </p>
                            <h2 style={{textAlign:"center"}}><span style={{color:"red"}}>$15.99</span><del>$19.99</del></h2>
                         </Pic>
                      
                       </Grid>
                         
                    </Homediv>
                           
                 
                     
                </div>


                <div>
                  <Homeshop>
                <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Fruits" value="1" />
            <Tab label="Cereal & Bakery" value="2" />
            <Tab label="Herbs & Spices" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
         
                <Maindv>
                
                    {mockFruits.map((Fruit:Fruit) =>(
                      <Smallbox key={Fruit.id}>
                       <div>
                       <img src={Fruit.imageUrl} alt={Fruit.name} width={100} height={103} />
                      

                       </div>
                      <div>
                      <p>{Fruit.name}</p>
                      <p>$
                        {Fruit.pricePerKg}
                       </p>

                      </div>
                      <div>
                      <button className='button'>add</button>
                   
                       

                      </div>
                       
                      </Smallbox>
                    ) )};

                  
                </Maindv>
           
           
         
                   
           </TabPanel>      
           
        <TabPanel value="2">
             
        <Maindv>
                
                {cerealAndBakery.map((Product:Product) =>(
                  <Smallbox key={Product.id}>
                   <div>
                   <img src={Product.imageUrl} alt={Product.name} width={100} height={103} />
                  

                   </div>
                  <div>
                  <p>{Product.name}</p>
                  <p>$
                    {Product.price}
                   </p>

                  </div>
                  <div>
                  <button className='button'>add</button>
               
                   

                  </div>
                   
                  </Smallbox>
                ) )}

              
            </Maindv>


        </TabPanel>
        <TabPanel value="3">
        <Maindv>
                
                {herbsAndSpices.map((Herb:Herb ) =>(
                  <Smallbox key={Herb.id}>
                   <div>
                   <img src={Herb.imageUrl} alt={Herb.name} width={100} height={103} />
                  

                   </div>
                  <div>
                  <p>{Herb.name}</p>
                  <p>$
                    {Herb.pricePerKg}
                   </p>

                  </div>
                  <div>
                  <button className='button'>add</button>
               
                   

                  </div>
                   
                  </Smallbox>
                ) )}

              
            </Maindv>
       
        </TabPanel>
      </TabContext>
    </Box>
    </Homeshop>
                </div>

            </Continer>
            </Maincon>



       </div>
       <div>
          <FooterComponent/>
       </div>
    </div>
  )
}

export default HomeComponent;
