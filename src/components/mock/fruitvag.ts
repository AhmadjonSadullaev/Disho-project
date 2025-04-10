import img from "../../assess/fruit/apple.jpeg";
import banana from "../../assess/fruit/banana.jpeg";
import Watermelon from "../../assess/fruit/Watermelon.jpeg";
import strawberry from "../../assess/fruit/strawberry.jpeg";
import grapes from "../../assess/fruit/grapes.jpeg";
import mango from "../../assess/fruit/mango.jpeg";
import kiwi from "../../assess/fruit/kiwi.jpeg";
import peach from "../../assess/fruit/peach.jpeg";
import pineapple from "../../assess/fruit/pineapple.jpeg";
import orage from "../../assess/shopimage/orange.jpeg";
import carrot from "../../assess/shopimage/carrot.jpeg";
import tomato from "../../assess/shopimage/tomato.jpeg";
import broccoli from "../../assess/shopimage/broccoli.jpeg";
import spinach from "../../assess/shopimage/spinach.jpeg";
import Potato from "../../assess/shopimage/Potato.jpeg";
import onion from "../../assess/shopimage/onion.jpeg";
import Cucumber from "../../assess/shopimage/Cucumber.jpeg";
import pepper from "../../assess/shopimage/pepper.jpeg";
import Lettuce from "../../assess/shopimage/Lettuce.jpeg";
import Eggplant from "../../assess/shopimage/Eggplant.jpeg";

export interface Product {
    id: number;
    name: string;
    category: "Fruit" | "Vegetable";
    pricePerKg: number;
    imageUrl: string;
  }
  
 export const fruitsAndVegetables: Product[] = [
    // Fruits
    {
      id: 1,
      name: "Apple",
      category: "Fruit",
      pricePerKg: 3.99,
      imageUrl: `${img}`
    },
    {
      id: 2,
      name: "Banana",
      category: "Fruit",
      pricePerKg: 1.49,
      imageUrl: `${banana}`
    },
    {
      id: 3,
      name: "Orange",
      category: "Fruit",
      pricePerKg: 2.99,
      imageUrl: `${orage}`
    },
    {
      id: 4,
      name: "Strawberry",
      category: "Fruit",
      pricePerKg: 5.99,
      imageUrl: `${strawberry}`
    },
    {
      id: 5,
      name: "Grapes",
      category: "Fruit",
      pricePerKg: 4.49,
      imageUrl: `${grapes}`
    },
    {
      id: 6,
      name: "Pineapple",
      category: "Fruit",
      pricePerKg: 3.79,
      imageUrl: `${pineapple}`
    },
    {
      id: 7,
      name: "Watermelon",
      category: "Fruit",
      pricePerKg: 1.99,
      imageUrl: `${Watermelon}`
    },
    {
      id: 8,
      name: "Mango",
      category: "Fruit",
      pricePerKg: 6.49,
      imageUrl: `${mango}`
    },
    {
      id: 9,
      name: "Kiwi",
      category: "Fruit",
      pricePerKg: 7.99,
      imageUrl: `${kiwi}`
    },
    {
      id: 10,
      name: "Peach",
      category: "Fruit",
      pricePerKg: 4.29,
      imageUrl: `${peach}`
    },
  
    // Vegetables
    {
      id: 11,
      name: "Carrot",
      category: "Vegetable",
      pricePerKg: 2.49,
      imageUrl: `${carrot}`
    },
    {
      id: 12,
      name: "Tomato",
      category: "Vegetable",
      pricePerKg: 2.99,
      imageUrl: `${tomato}`
    },
    {
      id: 13,
      name: "Broccoli",
      category: "Vegetable",
      pricePerKg: 3.79,
      imageUrl: `${broccoli}`
    },
    {
      id: 14,
      name: "Spinach",
      category: "Vegetable",
      pricePerKg: 2.89,
      imageUrl: `${spinach}`
    },
    {
      id: 15,
      name: "Potato",
      category: "Vegetable",
      pricePerKg: 1.79,
      imageUrl: `${Potato}`
    },
    {
      id: 16,
      name: "Onion",
      category: "Vegetable",
      pricePerKg: 1.99,
      imageUrl: `${onion}`
    },
    {
      id: 17,
      name: "Cucumber",
      category: "Vegetable",
      pricePerKg: 2.59,
      imageUrl: `${Cucumber}`
    },
    {
      id: 18,
      name: "Bell Pepper",
      category: "Vegetable",
      pricePerKg: 4.19,
      imageUrl: `${pepper}`
    },
    {
      id: 19,
      name: "Lettuce",
      category: "Vegetable",
      pricePerKg: 1.99,
      imageUrl: `${Lettuce}`
    },
    {
      id: 20,
      name: "Eggplant",
      category: "Vegetable",
      pricePerKg: 3.29,
      imageUrl: `${Eggplant}`
    }
  ];
  
  export default fruitsAndVegetables;
  