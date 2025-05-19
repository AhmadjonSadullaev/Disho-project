import React from 'react'
import { Mainshop, Smallshop } from '../shopstyle.ts';
import snacksAndCannedGoods, { Product } from '../../mock/snaks.ts';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const SnackData = () => {
  return (
   <Mainshop>
     
        {snacksAndCannedGoods.map((Product:Product ) =>(
                          <Smallshop key={Product.id}>
                           <div>
                           <img src={Product.imageUrl} alt={Product.name} width={200} height={203} />
                          
        
                           </div>
                          <div>
                          <h2 >{Product.name}</h2>
                          <h2>$
                            {Product.pricePerUnit}
                           </h2>
        
                          </div>
                          <div style={{display:"flex",justifyContent:"space-around"}}>
                     <AddShoppingCartSharpIcon/>
                     
                     <RemoveRedEyeOutlinedIcon/>
                     
                     
                     </div>
                          
                           
                          </Smallshop>
                        ) )}
                      
     </Mainshop>
       
  )
}

export default SnackData;
