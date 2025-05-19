import React from 'react'
import { Mainshop, Smallshop } from '../shopstyle.ts';
import cerealAndBakery, { Product } from '../../mock/cereal.ts';





const BakeryData = () => {
  return (
      <Mainshop>
                    
                    {cerealAndBakery.map ((Product:Product ) =>(
                      <Smallshop key={Product.id} >
                       <div>
                       <img src={Product.imageUrl} alt={Product.name} width={200} height={203} />
                      
    
                       </div>
                      <div>
                      <h2>{Product.name}</h2>
                      <h2>$
                        {Product.price}
                       </h2>
    
                      </div>
                     
                
                       
                      </Smallshop>
                    ) )}
    
                  
                </Mainshop>
           
  )
}

export default BakeryData;

