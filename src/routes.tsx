import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/home/home.tsx';
import ShopComponent from './components/shop/shop.tsx';
import Login from './components/login/login.tsx';
import Blog from './components/blog/blog.tsx';
import Contact from './components/contact/contact.tsx';
import Fruitsdata from './components/shop/components/fruits.tsx';
import AboutComponent from './components/about/about.tsx';
import Shopcart from './components/shoping.cart/shopcart.tsx';
import PageComponent from './components/pages/pages.tsx';
import VievComponent from './view/viev.tsx';











const RouteComponent = () => {
  
  
  return (
 
    <BrowserRouter>
      <Routes>
    
        <Route path='/home' element={<HomeComponent/>}/>
         <Route path='/shop' element={<ShopComponent/>} />
         <Route path='/' element={<Login/>} />
          <Route path='/pages' element={<PageComponent/>}/>
         <Route path='/blog' element={<Blog/>}/>
         <Route path='/contact' element={<Contact/>}/>
          <Route path='/Fruitsdata' element={<Fruitsdata/>}/>
          <Route path='/about' element={<AboutComponent/>} />
          <Route path='/shopingcard' element={<Shopcart/>}/>
          <Route path='/view' element={<VievComponent/>}/>
       </Routes>
    </BrowserRouter>
    
    
 
  )
}

export default RouteComponent
