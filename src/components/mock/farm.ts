import images from "../../assess/farm/images.jpeg";
import Cheddarcheese from "../../assess/farm/Cheddarcheese.jpeg";
import Butter from "../../assess/farm/Butter.jpeg";
import Yogurt from "../../assess/farm/Yogurt.jpeg";
import Beefsteak from "../../assess/farm/Beefsteak.jpeg";
import Chickenbreast from "../../assess/farm/Chickenbreast.jpeg";
import Lampchops from "../../assess/farm/Lampchops.jpeg";
import Lambleg from "../../assess/farm/Lambleg.jpeg";
import Chickeneggs from "../../assess/farm/Chickeneggs.jpeg";
import Duckeggs from "../../assess/farm/Duckeggs.jpeg";
import Wheat from "../../assess/farm/Wheat.jpeg";
import Rice from "../../assess/farm/Rice.jpeg";
import Oats from "../../assess/farm/Oats.jpeg";
import Barley from "../../assess/farm/Barley.jpeg";
import Corn from "../../assess/farm/Corn.jpeg";
import Quinoa from "../../assess/farm/Quinoa.jpeg";
// This file contains the mock data for farm products
// Each product has an id, name, category, price per kg, and image URL
// The categories are Dairy, Meat, Eggs, and Grains
// The prices are in USD per kg




export interface Product {
    id: number;
    name: string;
    category: "Dairy" | "Meat" | "Eggs" | "Grains";
    pricePerKg: number;
    imageUrl: string;
  }
  
 export const farmProducts: Product[] = [
    // Dairy Products
    {
      id: 1,
      name: "Fresh Milk",
      category: "Dairy",
      pricePerKg: 1.99,
      imageUrl: `${images}`
    },
    {
      id: 2,
      name: "Cheddar Cheese",
      category: "Dairy",
      pricePerKg: 6.99,
      imageUrl: `${Cheddarcheese}`
    },
    {
      id: 3,
      name: "Butter",
      category: "Dairy",
      pricePerKg: 4.99,
      imageUrl: `${Butter}`
    },
    {
      id: 4,
      name: "Yogurt",
      category: "Dairy",
      pricePerKg: 3.49,
      imageUrl: `${Yogurt}`
    },
  
    // Meat Products
    {
      id: 5,
      name: "Beef Steak",
      category: "Meat",
      pricePerKg: 12.99,
      imageUrl: `${Beefsteak}`
    },
    {
      id: 6,
      name: "Chicken Breast",
      category: "Meat",
      pricePerKg: 7.99,
      imageUrl: `${Chickenbreast}`
    },
    {
      id: 7,
      name: "Lamb Chops",
      category: "Meat",
      pricePerKg: 9.49,
      imageUrl: `${Lampchops}`
    },
    {
      id: 8,
      name: "Lamb Leg",
      category: "Meat",
      pricePerKg: 14.99,
      imageUrl: `${Lambleg}`
    },
  
    // Eggs
    {
      id: 9,
      name: "Chicken Eggs",
      category: "Eggs",
      pricePerKg: 2.99,
      imageUrl: `${Chickeneggs}`
    },
    {
      id: 10,
      name: "Duck Eggs",
      category: "Eggs",
      pricePerKg: 4.49,
      imageUrl: `${Duckeggs}`
    },
  
    // Grains
    {
      id: 11,
      name: "Wheat",
      category: "Grains",
      pricePerKg: 1.79,
      imageUrl: `${Wheat}`
    },
    {
      id: 12,
      name: "Rice",
      category: "Grains",
      pricePerKg: 2.49,
      imageUrl: `${Rice}`
    },
    {
      id: 13,
      name: "Oats",
      category: "Grains",
      pricePerKg: 3.29,
      imageUrl: `${Oats}`
    },
    {
      id: 14,
      name: "Barley",
      category: "Grains",
      pricePerKg: 2.89,
      imageUrl: `${Barley}`
    },
    {
      id: 15,
      name: "Corn",
      category: "Grains",
      pricePerKg: 1.99,
      imageUrl: `${Corn}`
    },
    {
      id: 16,
      name: "Quinoa",
      category: "Grains",
      pricePerKg: 4.99,
      imageUrl: `${Quinoa}`
    }
  ];
  
  export default farmProducts;
  