import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/home/home.tsx';
import ShopComponent from './components/shop/shop.tsx';
import Login from './components/login/login.tsx';






const RouteComponent = () => {

  
  return (
 
    <BrowserRouter>
      <Routes>
    
        <Route path='/' element={<HomeComponent/>}/>
         <Route path='/shop' element={<ShopComponent/>} />
         <Route path='/login' element={<Login/>} />
       
       </Routes>
    </BrowserRouter>
    
    
 
  )
}

export default RouteComponent
