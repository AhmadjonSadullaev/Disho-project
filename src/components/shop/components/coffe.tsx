import React from 'react'
import { Mainshop, Smallshop } from '../shopstyle.ts';
import coffeeAndTea, { Product } from '../../mock/coffeandtea.ts';

const CoffeData = () => {
  return (
    <div>
  <Mainshop>
  
     {coffeeAndTea.map((Product:Product ) =>(
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
    
    </div>
  )
}

export default CoffeData
