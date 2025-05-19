import React from 'react';
import { Mainshop,  Smallshop } from '../shopstyle.ts';
import fruitsAndVegetables, { Product } from '../../mock/fruitvag.ts';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link } from 'react-router-dom';

const Fruitsdata = () => {
  return (
    <div>
      

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
                     <div style={{display:"flex",justifyContent:"space-around"}}>
                     <AddShoppingCartSharpIcon/>
                     <Link to={"/view"}>
                     <RemoveRedEyeOutlinedIcon/>
                     </Link>
                 
                     
                     
                     </div>
                     </Smallshop>
                   ) )}
                 
</Mainshop>

    </div>
  )
}

export default Fruitsdata;
