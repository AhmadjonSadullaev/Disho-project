import  React, { useState } from 'react';
import NavbarComponent from '../navbar.tsx';
import FooterComponent from '../footer.tsx';
import fruit from "../../assess/shop/fruit.svg";
import honey from "../../assess/shop/honey.svg";
import img3 from "../../assess/shop/img3.svg";
import seeds from "../../assess/shop/seeds.svg";
import sprout from "../../assess/shop/sprout.svg"
import olive from "../../assess/shop/olive.svg";
import diet from "../../assess/shop/diet.svg";
import img8 from "../../assess/shop/img8.png"
import {  Shopdiv} from './shopstyle.ts';
import Fruitsdata from './components/fruits.tsx';
import SnackData from './components/snack.tsx';

import CoffeData from './components/coffe.tsx';
import HerbsData from './components/herbs.tsx';
import OilData from './components/oil.tsx';
import FarmData from './components/farm.tsx';
import OwmData from './components/own.tsx';
import BakeryData from './components/bakery.tsx';
import Caruseal from '../caruseal/caruseal.tsx';















const ShopComponent = () => {
 const [active,  setActive] = useState("fruits");
  const handleType =(type) =>{
    setActive(type);
  };


  return (
   <>
     <div><NavbarComponent/></div>
    <div>
      <Shopdiv>
        <button  onClick={() =>handleType("fruits")}  className="filter">
       
            <img src={fruit} alt="" />
          <strong  style={{textAlign:"center"}}>Fruits & 
          Vegetables</strong>
        </button>
  

        <button onClick={() =>handleType("snacks")} className="filter">
           <img src={honey} alt="" />
           <strong style={{textAlign:"center"}}>
           Snacks &
           Canned Goods
           </strong>
        </button>
        <button onClick={() =>handleType("cereal")} className="filter">
        <img src={img3} alt="" />
        <strong style={{textAlign:"center"}}>Cereal &
        Bakery</strong>
        </button>
        <button onClick={() =>handleType("coffee")} className="filter">
        <img src={seeds} alt="" />
        <strong style={{textAlign:"center"}}>Coffe &
        Tea</strong>
        </button>
        <button onClick={() =>handleType("herbs")} className="filter">
        <img src={sprout} alt="" />
        <strong style={{textAlign:"center"}}>Herbs &
        Spices</strong>
        </button>
        <button onClick={() =>handleType("oil")} className="filter">
        <img src={olive} alt="" />
        <strong style={{textAlign:"center"}}>Oil &
        Sauces</strong>
        </button>
        <button onClick={() =>handleType("farm")}  className="filter">
        <img src={diet} alt="" />
        <strong style={{textAlign:"center"}}>Farm
        Products</strong>
        </button>
        <button onClick={() =>handleType("own")} className="filter">
        <img src={img8} alt="" />
        <strong style={{textAlign:"center"}}>Own
        Production</strong>
        </button>

       
     </Shopdiv>
     <div style={{padding:"20px"}}>
     
 
     <Caruseal/>

        
     </div>
      



   
   
    {active === "fruits" && <Fruitsdata/> }
    {active === "snacks" && <SnackData/> }
    {active === "cereal" && <BakeryData/> }
    
    {active === "coffee" && <CoffeData/> }
    {active === "herbs" && <HerbsData/> }
    {active === "oil" && <OilData/> }
    {active === "farm" && <FarmData/> }
    {active === "own" && <OwmData/> }
     
  

  
   



 
    </div>
     

 





    <div><FooterComponent/></div>
   </>
  )
}

export default ShopComponent
