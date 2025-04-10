import potatochips from "../../assess/snacks/potatochips.jpeg";
import ChocolateBar from "../../assess/snacks/ChocolateBar.jpeg";
import Popcorn from "../../assess/snacks/Popcorn.jpeg";
import Granolabar from "../../assess/snacks/Granolabar.jpeg";
import pretzels from "../../assess/snacks/pretzels.jpeg";
import Trailmix from "../../assess/snacks/Trailmix.jpeg";
import Gummybears from "../../assess/snacks/Gummybears .jpeg";
import Cheesecrackers from "../../assess/snacks/Cheesecrackers.jpeg";
import tuna from "../../assess/snacks/tuna.jpeg";
import corn from "../../assess/snacks/corn.jpeg";
import Beans from "../../assess/snacks/Beans.jpeg";
import Tomatoes from "../../assess/snacks/Tomatoes.jpeg";
import Peaches from "../../assess/snacks/Peaches.jpeg";
import Cannedchicken from "../../assess/snacks/Cannedchicken.jpeg";
import Cannedsoup from "../../assess/snacks/Cannedsoup.jpeg";
import Cannedsardines from "../../assess/snacks/Cannedsardines.jpeg";








export interface Product {
  id: number;
  name: string;
  category: "Snack" | "Canned Good";
  pricePerUnit: number;
  imageUrl: string;
}

export const snacksAndCannedGoods: Product[] = [
  // Snacks
  {
    id: 1,
    name: "Potato Chips",
    category: "Snack",
    pricePerUnit: 2.99,
    imageUrl: `${potatochips}`
  },
  {
    id: 2,
    name: "Chocolate Bar",
    category: "Snack",
    pricePerUnit: 1.99,
    imageUrl:  `${ChocolateBar}`
  },
  {
    id: 3,
    name: "Popcorn",
    category: "Snack",
    pricePerUnit: 3.49,
    imageUrl: `${Popcorn}`
  },
  {
    id: 4,
    name: "Granola Bar",
    category: "Snack",
    pricePerUnit: 1.79,
    imageUrl: `${Granolabar}`
  },
  {
    id: 5,
    name: "Pretzels",
    category: "Snack",
    pricePerUnit: 2.59,
    imageUrl: `${pretzels}`
  },
  {
    id: 6,
    name: "Trail Mix",
    category: "Snack",
    pricePerUnit: 4.99,
    imageUrl: `${Trailmix}`
  },
  {
    id: 7,
    name: "Gummy Bears",
    category: "Snack",
    pricePerUnit: 2.29,
    imageUrl: `${Gummybears}`
  },
  {
    id: 8,
    name: "Cheese Crackers",
    category: "Snack",
    pricePerUnit: 3.19,
    imageUrl: `${Cheesecrackers}`
  },

  // Canned Goods
  {
    id: 9,
    name: "Canned Tuna",
    category: "Canned Good",
    pricePerUnit: 2.99,
    imageUrl:  `${tuna}`
  },
  {
    id: 10,
    name: "Canned Corn",
    category: "Canned Good",
    pricePerUnit: 1.49,
    imageUrl: `${corn}`
  },
  {
    id: 11,
    name: "Canned Beans",
    category: "Canned Good",
    pricePerUnit: 1.99,
    imageUrl: `${Beans}`
  },
  {
    id: 12,
    name: "Canned Tomatoes",
    category: "Canned Good",
    pricePerUnit: 1.79,
    imageUrl: `${Tomatoes}`
  },
  {
    id: 13,
    name: "Canned Peaches",
    category: "Canned Good",
    pricePerUnit: 2.49,
    imageUrl: `${Peaches}`
  },
  {
    id: 14,
    name: "Canned Chicken",
    category: "Canned Good",
    pricePerUnit: 3.99,
    imageUrl: `${Cannedchicken}`
  },
  {
    id: 15,
    name: "Canned Soup",
    category: "Canned Good",
    pricePerUnit: 2.89,
    imageUrl: `${Cannedsoup}`
  },
  {
    id: 16,
    name: "Canned Sardines",
    category: "Canned Good",
    pricePerUnit: 2.79,
    imageUrl: `${Cannedsardines}`
  }
];

export default snacksAndCannedGoods;
