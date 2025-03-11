import img from "../../assess/fruit/apple.jpeg";
import banana from "../../assess/fruit/banana.jpeg";
import grapes from "../../assess/fruit/grapes.jpeg";
import Watermelon from "../../assess/fruit/Watermelon.jpeg";
import mango from "../../assess/fruit/mango.jpeg";
import pineapple from "../../assess/fruit/pineapple.jpeg";
import strawberry from "../../assess/fruit/strawberry.jpeg";
import kiwi from "../../assess/fruit/kiwi.jpeg";
import peach from "../../assess/fruit/peach.jpeg";
import plum from "../../assess/fruit/plum.jpeg";
import blueberry from "../../assess/fruit/blueberry.jpeg";
import cherry from "../../assess/fruit/cherry.jpeg"

export type Fruit = {
    id: number;
    name: string;
    color: string;
    pricePerKg: number;
    inStock: boolean;
    origin: string;
    imageUrl: string;
  };
  
  export const mockFruits: Fruit[] = [
    { 
      id: 1, 
      name: "Apple", 
      color: "Red", 
      pricePerKg: 3.5, 
      inStock: true, 
      origin: "USA", 
      imageUrl: `${img}` 
    },
    { 
      id: 2, 
      name: "Banana", 
      color: "Yellow", 
      pricePerKg: 1.2, 
      inStock: true, 
      origin: "Ecuador", 
      imageUrl: `${banana}`
    },
    { 
      id: 3, 
      name: "Grapes", 
      color: "Purple", 
      pricePerKg: 2.8, 
      inStock: false, 
      origin: "Italy", 
      imageUrl: `${grapes}`
    },
    { 
      id: 4, 
      name: "Mango", 
      color: "Orange", 
      pricePerKg: 4.0, 
      inStock: true, 
      origin: "India", 
      imageUrl: `${mango}` 
    },
    { 
      id: 5, 
      name: "Pineapple", 
      color: "Brown", 
      pricePerKg: 3.0, 
      inStock: false, 
      origin: "Philippines", 
      imageUrl: `${pineapple}`
    },
    { 
      id: 6, 
      name: "Strawberry", 
      color: "Red", 
      pricePerKg: 5.0, 
      inStock: true, 
      origin: "France", 
      imageUrl: `${strawberry}`
    },
    { 
      id: 7, 
      name: "Watermelon", 
      color: "Green", 
      pricePerKg: 1.8, 
      inStock: true, 
      origin: "Brazil", 
      imageUrl: `${Watermelon}`
    },
    { 
      id: 8, 
      name: "Kiwi", 
      color: "Brown", 
      pricePerKg: 6.0, 
      inStock: false, 
      origin: "New Zealand", 
      imageUrl: `${kiwi}` 
    },
    { 
      id: 9, 
      name: "Blueberry", 
      color: "Blue", 
      pricePerKg: 7.0, 
      inStock: true, 
      origin: "Canada", 
      imageUrl: `${blueberry}` 
    },
    { 
      id: 10, 
      name: "Peach", 
      color: "Orange", 
      pricePerKg: 4.2, 
      inStock: true, 
      origin: "Spain", 
      imageUrl:`${peach}`  
    },
    { 
      id: 11, 
      name: "Plum", 
      color: "Purple", 
      pricePerKg: 3.3, 
      inStock: false, 
      origin: "South Africa", 
      imageUrl: `${plum}` 
    },
    { 
      id: 12, 
      name: "Cherry", 
      color: "Red", 
      pricePerKg: 8.0, 
      inStock: true, 
      origin: "Turkey", 
      imageUrl: `${cherry}`  
    },
    
   
  ];
  
  export default mockFruits;