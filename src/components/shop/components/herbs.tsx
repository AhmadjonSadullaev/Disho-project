import React from 'react'
import { Mainshop, Smallshop } from '../shopstyle.ts';
import herbsAndSpices, { Herb } from '../../mock/spices.ts';

const HerbsData = () => {
  return (
      <Mainshop>
      
         {herbsAndSpices.map((Herb:Herb ) =>(
                           <Smallshop key={Herb.id}>
                            <div>
                            <img src={Herb.imageUrl} alt={Herb.name} width={200} height={203} />
                           
         
                            </div>
                           <div>
                           <h2 >{Herb.name}</h2>
                           <h2>$
                             {Herb.pricePerKg}
                            </h2>
         
                           </div>
                           
                            
                           </Smallshop>
                         ) )}
                       
      </Mainshop>
  )
}

export default HerbsData;
