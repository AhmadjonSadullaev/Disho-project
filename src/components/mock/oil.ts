import Oliveoil from "../../assess/oil/Oliveoil.jpeg";
import vegetableoil from "../../assess/oil/Vegetableoil.jpeg";
import Coconutoil from "../../assess/oil/Coconutoil.jpeg";
import Sunfloweroil from "../../assess/oil/Sunfloweroil.jpeg";
import Sesameoil from "../../assess/oil/Sesameoil.jpeg";
import Soysauce from "../../assess/oil/Soysauce.jpeg";
import Tomatoketchup from "../../assess/oil/Tomatoketchup.jpeg";
import Mayonnaise from "../../assess/oil/Mayonnaise.jpeg";
import Barbecue from "../../assess/oil/Barbecue.jpeg";
import Hotchili from "../../assess/oil/Hotchili.jpeg";





export interface Product {
    id: number;
    name: string;
    category: "Oil" | "Sauce";
    pricePerLiter: number;
    imageUrl: string;
  }
  
 export const oilAndSauces: Product[] = [
    // Oils
    {
      id: 1,
      name: "Olive Oil",
      category: "Oil",
      pricePerLiter: 9.99,
      imageUrl: `${Oliveoil}`
    },
    {
      id: 2,
      name: "Vegetable Oil",
      category: "Oil",
      pricePerLiter: 4.99,
      imageUrl: `${vegetableoil}`
    },
    {
      id: 3,
      name: "Coconut Oil",
      category: "Oil",
      pricePerLiter: 8.49,
      imageUrl: `${Coconutoil}`
    },
    {
      id: 4,
      name: "Sunflower Oil",
      category: "Oil",
      pricePerLiter: 5.99,
      imageUrl: `${Sunfloweroil}`
    },
    {
      id: 5,
      name: "Sesame Oil",
      category: "Oil",
      pricePerLiter: 11.99,
      imageUrl: `${Sesameoil}`
    },
  
    // Sauces
    {
      id: 6,
      name: "Soy Sauce",
      category: "Sauce",
      pricePerLiter: 3.49,
      imageUrl: `${Soysauce}`
    },
    {
      id: 7,
      name: "Tomato Ketchup",
      category: "Sauce",
      pricePerLiter: 2.99,
      imageUrl: `${Tomatoketchup}`
    },
    {
      id: 8,
      name: "Mayonnaise",
      category: "Sauce",
      pricePerLiter: 4.29,
      imageUrl: `${Mayonnaise}`
    },
    {
      id: 9,
      name: "Barbecue Sauce",
      category: "Sauce",
      pricePerLiter: 5.49,
      imageUrl: `${Barbecue}`
    },
    {
      id: 10,
      name: "Hot Chili Sauce",
      category: "Sauce",
      pricePerLiter: 6.99,
      imageUrl: `${Hotchili}`
    }
  ];
  
  export default oilAndSauces;
  