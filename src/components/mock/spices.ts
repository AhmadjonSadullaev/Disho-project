import basil from "../../assess/herb/basil.jpeg";
import black from "../../assess/herb/black.jpeg";
import cinnamon from "../../assess/herb/cinnamon.jpeg";
import cloves from "../../assess/herb/cloves.jpeg";
import mint from "../../assess/herb/mint.jpeg";
import oregano from "../../assess/herb/oregano.jpeg";
import paprika from "../../assess/herb/paprika.jpeg";
import rosemary from "../../assess/herb/rosemary.jpeg";
import thyme from "../../assess/herb/thyme.jpeg";
import turmeric from "../../assess/herb/turmeric.jpeg";


export interface Herb {
    id: number;
    name: string;
    category: "Herb" | "Spice";
    pricePerKg: number;
    imageUrl: string;
  }
  
 export const herbsAndSpices: Herb[] = [
    {
      id: 1,
      name: "Basil",
      category: "Herb",
      pricePerKg: 15.99,
      imageUrl: `${basil}`
    },
    {
      id: 2,
      name: "Oregano",
      category: "Herb",
      pricePerKg: 18.49,
      imageUrl: `${oregano}`
    },
    {
      id: 3,
      name: "Rosemary",
      category: "Herb",
      pricePerKg: 20.99,
      imageUrl: `${rosemary}`
    },
    {
      id: 4,
      name: "Thyme",
      category: "Herb",
      pricePerKg: 22.99,
      imageUrl: `${thyme}`
    },
    {
      id: 5,
      name: "Mint",
      category: "Herb",
      pricePerKg: 12.99,
      imageUrl: `${mint}`
    },
    {
      id: 6,
      name: "Cinnamon",
      category: "Spice",
      pricePerKg: 25.99,
      imageUrl: `${cinnamon}`
    },
    {
      id: 7,
      name: "Turmeric",
      category: "Spice",
      pricePerKg: 30.49,
      imageUrl: `${turmeric}`
    },
    {
      id: 8,
      name: "Black Pepper",
      category: "Spice",
      pricePerKg: 35.99,
      imageUrl: `${black}`
    },
    {
      id: 9,
      name: "Paprika",
      category: "Spice",
      pricePerKg: 28.99,
      imageUrl: `${paprika}`
    },
    {
      id: 10,
      name: "Cloves",
      category: "Spice",
      pricePerKg: 40.99,
      imageUrl: `${cloves}`
    }
  ];
  
  export default herbsAndSpices;
  