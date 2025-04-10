import images from "../../assess/coffee/images.jpeg";
import Arabicacoffee from "../../assess/coffee/Arabicacoffee.jpeg";
import Robustacoffee from "../../assess/coffee/Robustacoffee.jpeg";
import Colombiancoffee from "../../assess/coffee/Colombiancoffee.jpeg";
import FrenchRoast from "../../assess/coffee/FrenchRoast.jpeg";
import Decafcoffee from "../../assess/coffee/Decafcoffee.jpeg";
import ColdBrew from "../../assess/coffee/ColdBrew.jpeg";
import Italianroast from "../../assess/coffee/Italianroast.jpeg";
import Greentea from "../../assess/coffee/Greentea.jpeg";
import Blacktea from "../../assess/coffee/Blacktea.jpeg";
import Oolongtea from "../../assess/coffee/Oolongtea.jpeg";
import Chamomiletea from "../../assess/coffee/Chamomiletea.jpeg";
import Matchatea from "../../assess/coffee/Matchatea.jpeg";
import Whitetea from "../../assess/coffee/Whitetea.jpeg";
import Herbaltea from "../../assess/coffee/Herbaltea.jpeg";



export interface Product {
    id: number;
    name: string;
    category: "Coffee" | "Tea";
    pricePerKg: number;
    imageUrl: string;
  }
  
 export const coffeeAndTea: Product[] = [
    // Coffee
    {
      id: 1,
      name: "Espresso Beans",
      category: "Coffee",
      pricePerKg: 25.99,
      imageUrl: `${images}`
    },
    {
      id: 2,
      name: "Arabica Coffee",
      category: "Coffee",
      pricePerKg: 22.49,
      imageUrl: `${Arabicacoffee}`
    },
    {
      id: 3,
      name: "Robusta Coffee",
      category: "Coffee",
      pricePerKg: 19.99,
      imageUrl: `${Robustacoffee}`
    },
    {
      id: 4,
      name: "Colombian Coffee",
      category: "Coffee",
      pricePerKg: 27.99,
      imageUrl: `${Colombiancoffee}`
    },
    {
      id: 5,
      name: "French Roast Coffee",
      category: "Coffee",
      pricePerKg: 24.99,
      imageUrl: `${FrenchRoast}`
    },
    {
      id: 6,
      name: "Decaf Coffee",
      category: "Coffee",
      pricePerKg: 20.99,
      imageUrl: `${Decafcoffee}`
    },
    {
      id: 7,
      name: "Cold Brew Coffee",
      category: "Coffee",
      pricePerKg: 26.49,
      imageUrl: `${ColdBrew}`
    },
    {
      id: 8,
      name: "Italian Roast Coffee",
      category: "Coffee",
      pricePerKg: 23.99,
      imageUrl: `${Italianroast}`
    },
  
    // Tea
    {
      id: 9,
      name: "Green Tea",
      category: "Tea",
      pricePerKg: 15.99,
      imageUrl: `${Greentea}`
    },
    {
      id: 10,
      name: "Black Tea",
      category: "Tea",
      pricePerKg: 12.99,
      imageUrl: `${Blacktea}`
    },
    {
      id: 11,
      name: "Oolong Tea",
      category: "Tea",
      pricePerKg: 18.49,
      imageUrl:`${Oolongtea}`
    },
    {
      id: 12,
      name: "Chamomile Tea",
      category: "Tea",
      pricePerKg: 14.99,
      imageUrl: `${Chamomiletea}`
    },
    {
      id: 13,
      name: "Matcha Tea",
      category: "Tea",
      pricePerKg: 29.99,
      imageUrl: `${Matchatea}`
    },
    {
      id: 14,
      name: "White Tea",
      category: "Tea",
      pricePerKg: 19.99,
      imageUrl: `${Whitetea}`
    },
    {
      id: 15,
      name: "Herbal Tea",
      category: "Tea",
      pricePerKg: 16.49,
      imageUrl: `${Herbaltea}`
    }
  ];
  
  export default coffeeAndTea;
  