import React from 'react';
import { Mainshop, Shops, Smallshop } from '../shopstyle.ts';
import fruitsAndVegetables, { Product } from '../../mock/fruitvag.ts';

const Fruitsdata = () => {
  return (
    <div>
      <Shops>

<Mainshop>

   {fruitsAndVegetables.map((Product:Product ) =>(
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
</Shops>
    </div>
  )
}

export default Fruitsdata
