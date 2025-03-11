type Milk = {
    id: number;
    name: string;
    type: "Cow" | "Almond" | "Soy" | "Oat" | "Rice" | "Coconut" | "Goat";
    pricePerL: number;
    inStock: boolean;
    origin: string;
    imageUrl: string;
  };
  
  const mockMilks: Milk[] = [
    { 
      id: 1, 
      name: "Whole Milk", 
      type: "Cow", 
      pricePerL: 1.5, 
      inStock: true, 
      origin: "USA", 
      imageUrl: "https://source.unsplash.com/200x200/?whole-milk" 
    },
    { 
      id: 2, 
      name: "Almond Milk", 
      type: "Almond", 
      pricePerL: 2.0, 
      inStock: true, 
      origin: "USA", 
      imageUrl: "https://source.unsplash.com/200x200/?almond-milk" 
    },
    { 
      id: 3, 
      name: "Soy Milk", 
      type: "Soy", 
      pricePerL: 1.8, 
      inStock: true, 
      origin: "Canada", 
      imageUrl: "https://source.unsplash.com/200x200/?soy-milk" 
    },
    { 
      id: 4, 
      name: "Oat Milk", 
      type: "Oat", 
      pricePerL: 2.5, 
      inStock: false, 
      origin: "Sweden", 
      imageUrl: "https://source.unsplash.com/200x200/?oat-milk" 
    },
    { 
      id: 5, 
      name: "Rice Milk", 
      type: "Rice", 
      pricePerL: 2.0, 
      inStock: true, 
      origin: "Thailand", 
      imageUrl: "https://source.unsplash.com/200x200/?rice-milk" 
    },
    { 
      id: 6, 
      name: "Coconut Milk", 
      type: "Coconut", 
      pricePerL: 3.0, 
      inStock: false, 
      origin: "Philippines", 
      imageUrl: "https://source.unsplash.com/200x200/?coconut-milk" 
    },
    { 
      id: 7, 
      name: "Goat Milk", 
      type: "Goat", 
      pricePerL: 4.0, 
      inStock: true, 
      origin: "Greece", 
      imageUrl: "https://source.unsplash.com/200x200/?goat-milk" 
    },
    { 
      id: 8, 
      name: "Skim Milk", 
      type: "Cow", 
      pricePerL: 1.3, 
      inStock: true, 
      origin: "USA", 
      imageUrl: "https://source.unsplash.com/200x200/?skim-milk" 
    },
    { 
      id: 9, 
      name: "Lactose-Free Milk", 
      type: "Cow", 
      pricePerL: 2.2, 
      inStock: true, 
      origin: "UK", 
      imageUrl: "https://source.unsplash.com/200x200/?lactose-free-milk" 
    },
    { 
      id: 10, 
      name: "Chocolate Milk", 
      type: "Cow", 
      pricePerL: 2.5, 
      inStock: true, 
      origin: "USA", 
      imageUrl: "https://source.unsplash.com/200x200/?chocolate-milk" 
    },
  ];
  
  export default mockMilks;