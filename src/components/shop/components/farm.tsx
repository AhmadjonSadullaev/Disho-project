import React from 'react'
import { Mainshop, Smallshop } from '../shopstyle.ts';
import farmProducts, { Product } from '../../mock/farm.ts';

const FarmData  = () => {
  return (
          <Mainshop>
          
             {farmProducts.map((Product:Product ) =>(
                               <Smallshop key={Product.id}>
                                <div>
                                <img src={Product.imageUrl} alt={Product.name} width={200} height={203} />
                               
             
                                </div>
                               <div>
                               <h2 >{Product.name}</h2>
                               <h2>$
                                 {Product.pricePerKg}
                                </h2>
             
                               </div>
                               
                                
                               </Smallshop>
                             ) )}
                           
          </Mainshop>
  )
}

export default FarmData;
