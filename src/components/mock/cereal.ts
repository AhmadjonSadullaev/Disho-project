import bagel from "../../assess/cereal/bagel.jpeg";
import blueberry from "../../assess/cereal/blueberry-muffin.jpeg";
import bread1 from "../../assess/cereal/bread1.jpeg";
import Choco from "../../assess/cereal/Choco.jpeg";
import chocolate from "../../assess/cereal/chocolate-cake.jpeg";
import croissant from "../../assess/cereal/croissant.jpeg";
import Corn from "../../assess/cereal/Corn-flakes.jpeg";
import granola from "../../assess/cereal/granola.jpeg";
import oatmeal from "../../assess/cereal/oatmeal.jpeg";
import Rise from "../../assess/cereal/Rice.jpeg";



export interface Product {
    id: number;
    name: string;
    category: "Cereal" | "Bakery";
    price: number;
    imageUrl: string;
  }
  
 export const cerealAndBakery: Product[] = [
    {
      id: 1,
      name: "Whole Wheat Bread",
      category: "Bakery",
      price: 2.99,
      imageUrl: `${bread1}`
    },
    {
      id: 2,
      name: "Croissant",
      category: "Bakery",
      price: 1.49,
      imageUrl: `${croissant}`
    },
    {
      id: 3,
      name: "Blueberry Muffin",
      category: "Bakery",
      price: 3.29,
      imageUrl: `${blueberry}`
    },
    {
      id: 4,
      name: "Bagel",
      category: "Bakery",
      price: 1.99,
      imageUrl: `${bagel}`
    },
    {
      id: 5,
      name: "Chocolate Cake",
      category: "Bakery",
      price: 8.99,
      imageUrl: `${chocolate}`
    },
    {
      id: 6,
      name: "Corn Flakes",
      category: "Cereal",
      price: 4.49,
      imageUrl: `${Corn}`
    },
    {
      id: 7,
      name: "Oatmeal",
      category: "Cereal",
      price: 3.99,
      imageUrl: `${oatmeal}`
    },
    {
      id: 8,
      name: "Granola",
      category: "Cereal",
      price: 5.29,
      imageUrl: `${granola}`
    },
    {
      id: 9,
      name: "Rice Krispies",
      category: "Cereal",
      price: 4.79,
      imageUrl: `${Rise}`
    },
    {
      id: 10,
      name: "Choco Puffs",
      category: "Cereal",
      price: 4.99,
      imageUrl: `${Choco}`
    }
  ];
  
  export default cerealAndBakery;
  