import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/home/home.tsx';
import ShopComponent from './components/shop/shop.tsx';
import Login from './components/login/login.tsx';
import Page from './components/page/page.tsx';
import Blog from './components/blog/blog.tsx';
import Contact from './components/contact/contact.tsx';
import Fruitsdata from './components/shop/components/fruits.tsx';








const RouteComponent = () => {

  
  return (
 
    <BrowserRouter>
      <Routes>
    
        <Route path='/' element={<HomeComponent/>}/>
         <Route path='/shop' element={<ShopComponent/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/page' element={<Page/>}/>
         <Route path='/blog' element={<Blog/>}/>
         <Route path='/contact' element={<Contact/>}/>
          <Route path='/Fruitsdata' element={<Fruitsdata/>}/>

       </Routes>
    </BrowserRouter>
    
    
 
  )
}

export default RouteComponent
