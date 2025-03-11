type Item = {
    id: number;
    name: string;
    type: "Fruit" | "Vegetable";
    color: string;
    pricePerKg: number;
    inStock: boolean;
    origin: string;
    imageUrl: string;
  };
  
  const mockItems: Item[] = [
    { 
      id: 1, 
      name: "Apple", 
      type: "Fruit", 
      color: "Red", 
      pricePerKg: 3.5, 
      inStock: true, 
      origin: "USA", 
      imageUrl: "https://source.unsplash.com/200x200/?apple" 
    },
    { 
      id: 2, 
      name: "Banana", 
      type: "Fruit", 
      color: "Yellow", 
      pricePerKg: 1.2, 
      inStock: true, 
      origin: "Ecuador", 
      imageUrl: "https://source.unsplash.com/200x200/?banana" 
    },
    { 
      id: 3, 
      name: "Grapes", 
      type: "Fruit", 
      color: "Purple", 
      pricePerKg: 2.8, 
      inStock: false, 
      origin: "Italy", 
      imageUrl: "https://source.unsplash.com/200x200/?grapes" 
    },
    { 
      id: 4, 
      name: "Carrot", 
      type: "Vegetable", 
      color: "Orange", 
      pricePerKg: 2.0, 
      inStock: true, 
      origin: "USA", 
      imageUrl: "https://source.unsplash.com/200x200/?carrot" 
    },
    { 
      id: 5, 
      name: "Tomato", 
      type: "Vegetable", 
      color: "Red", 
      pricePerKg: 1.5, 
      inStock: true, 
      origin: "Spain", 
      imageUrl: "https://source.unsplash.com/200x200/?tomato" 
    },
    { 
      id: 6, 
      name: "Mango", 
      type: "Fruit", 
      color: "Orange", 
      pricePerKg: 4.0, 
      inStock: true, 
      origin: "India", 
      imageUrl: "https://source.unsplash.com/200x200/?mango" 
    },
    { 
      id: 7, 
      name: "Cucumber", 
      type: "Vegetable", 
      color: "Green", 
      pricePerKg: 2.3, 
      inStock: true, 
      origin: "Japan", 
      imageUrl: "https://source.unsplash.com/200x200/?cucumber" 
    },
    { 
      id: 8, 
      name: "Pineapple", 
      type: "Fruit", 
      color: "Brown", 
      pricePerKg: 3.0, 
      inStock: false, 
      origin: "Philippines", 
      imageUrl: "https://source.unsplash.com/200x200/?pineapple" 
    },
    { 
      id: 9, 
      name: "Strawberry", 
      type: "Fruit", 
      color: "Red", 
      pricePerKg: 5.0, 
      inStock: true, 
      origin: "France", 
      imageUrl: "https://source.unsplash.com/200x200/?strawberry" 
    },
    { 
      id: 10, 
      name: "Lettuce", 
      type: "Vegetable", 
      color: "Green", 
      pricePerKg: 3.0, 
      inStock: true, 
      origin: "USA", 
      imageUrl: "https://source.unsplash.com/200x200/?lettuce" 
    },
    { 
      id: 11, 
      name: "Avocado", 
      type: "Fruit", 
      color: "Green", 
      pricePerKg: 5.5, 
      inStock: false, 
      origin: "Mexico", 
      imageUrl: "https://source.unsplash.com/200x200/?avocado" 
    },
    { 
      id: 12, 
      name: "Spinach", 
      type: "Vegetable", 
      color: "Green", 
      pricePerKg: 2.8, 
      inStock: true, 
      origin: "Canada", 
      imageUrl: "https://source.unsplash.com/200x200/?spinach" 
    },
    { 
      id: 13, 
      name: "Watermelon", 
      type: "Fruit", 
      color: "Green", 
      pricePerKg: 1.8, 
      inStock: true, 
      origin: "Brazil", 
      imageUrl: "https://source.unsplash.com/200x200/?watermelon" 
    },
    { 
      id: 14, 
      name: "Potato", 
      type: "Vegetable", 
      color: "Brown", 
      pricePerKg: 1.2, 
      inStock: true, 
      origin: "Germany", 
      imageUrl: "https://source.unsplash.com/200x200/?potato" 
    },
    { 
      id: 15, 
      name: "Kiwi", 
      type: "Fruit", 
      color: "Brown", 
      pricePerKg: 6.0, 
      inStock: false, 
      origin: "New Zealand", 
      imageUrl: "https://source.unsplash.com/200x200/?kiwi" 
    },
    { 
      id: 16, 
      name: "Eggplant", 
      type: "Vegetable", 
      color: "Purple", 
      pricePerKg: 3.0, 
      inStock: true, 
      origin: "Italy", 
      imageUrl: "https://source.unsplash.com/200x200/?eggplant" 
    },
    { 
      id: 17, 
      name: "Blueberry", 
      type: "Fruit", 
      color: "Blue", 
      pricePerKg: 7.0, 
      inStock: true, 
      origin: "Canada", 
      imageUrl: "https://source.unsplash.com/200x200/?blueberry" 
    },
    { 
      id: 18, 
      name: "Broccoli", 
      type: "Vegetable", 
      color: "Green", 
      pricePerKg: 3.5, 
      inStock: true, 
      origin: "Mexico", 
      imageUrl: "https://source.unsplash.com/200x200/?broccoli" 
    },
    { 
      id: 19,
      name: "Peach", 
    type: "Fruit", 
    color: "Orange", 
    pricePerKg: 4.2, 
    inStock: true, 
    origin: "Spain", 
    imageUrl: "https://source.unsplash.com/200x200/?peach" 
  },
  { 
    id: 20, 
    name: "Cauliflower", 
    type: "Vegetable", 
    color: "White", 
    pricePerKg: 2.7, 
    inStock: false, 
    origin: "France", 
    imageUrl: "https://source.unsplash.com/200x200/?cauliflower" 
  },
  { 
    id: 21, 
    name: "Plum", 
    type: "Fruit", 
    color: "Purple", 
    pricePerKg: 3.3, 
    inStock: false, 
    origin: "South Africa", 
    imageUrl: "https://source.unsplash.com/200x200/?plum" 
  },
  { 
    id: 22, 
    name: "Carrot", 
    type: "Vegetable", 
    color: "Orange", 
    pricePerKg: 2.0, 
    inStock: true, 
    origin: "USA", 
    imageUrl: "https://source.unsplash.com/200x200/?carrot" 
  },
  { 
    id: 23, 
    name: "Cherry", 
    type: "Fruit", 
    color: "Red", 
    pricePerKg: 8.0, 
    inStock: true, 
    origin: "Turkey", 
    imageUrl: "https://source.unsplash.com/200x200/?cherry" 
  },
  { 
    id: 24, 
    name: "Lettuce", 
    type: "Vegetable", 
    color: "Green", 
    pricePerKg: 3.0, 
    inStock: true, 
    origin: "USA", 
    imageUrl: "https://source.unsplash.com/200x200/?lettuce" 
  },
];

export default mockItems;