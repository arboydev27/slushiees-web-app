type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "Cookies & Cream Shake",
      desc: "A creamy, dreamy blend of vanilla milkshake and crushed cookies, topped with whipped cream and cookie crumbles.",
      img: "/featured/f1.png",
      price: 6.9,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
    {
      id: 2,
      title: "Strawberry Sunset",
      desc: "Strawberries, banana, and orange juice come together for a smoothie that tastes like summer in a cup.",
      img: "/featured/f2.png",
      price: 6.3,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
    {
      id: 3,
      title: "Berry Bliss",
      desc: "A sweet fusion of strawberries, blueberries, and raspberries blended to icy perfection—tart, tangy, and totally refreshing.",
      img: "/featured/f3.png",
      price: 5.9,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
    {
      id: 4,
      title: "Tropical Tango",
      desc: "Pineapple, mango, and coconut milk dance together in this creamy tropical smoothie dream.",
      img: "/featured/f4.png",
      price: 6.5,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
    {
      id: 5,
      title: "Minty Melon Chill",
      desc: "Cool down with watermelon, cucumber, and a hint of mint—blended into a light and hydrating slush.",
      img: "/featured/f5.png",
      price: 5.5,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
  
    {
      id: 6,
      title: "Matcha Magic",
      desc: "Smooth, creamy matcha with a splash of oat milk and vanilla—earthy, energizing, and aesthetic.",
      img: "/featured/f6.png",
      price: 6.9,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
    {
      id: 7,
      title: "Blue Raspberry Slush",
      desc: "A bold and icy blue raspberry slushie—tangy, sweet, and wildly fun to sip.",
      img: "/featured/f7.png",
      price: 5.0,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
    {
      id: 8,
      title: "Peachy Keen",
      desc: "Juicy peaches, a touch of honey, and creamy yogurt make this smoothie as smooth as it sounds.",
      img: "/featured/f8.png",
      price: 6.4,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
    {
      id: 9,
      title: "Choco Banana Buzz",
      desc: "Bananas and rich chocolate swirl into a silky shake that's both a dessert and a pick-me-up.",
      img: "/featured/f9.png",
      price: 6.8,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
  ];
  
  
  
  
  
  export const drinks: Products = [
    {
      id: 1,
      title: "Cookies & Cream Shake",
      desc: "A creamy, dreamy blend of vanilla milkshake and crushed cookies, topped with whipped cream and cookie crumbles.",
      img: "/featured/f1.png",
      price: 6.9,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
    {
      id: 2,
      title: "Strawberry Sunset",
      desc: "Strawberries, banana, and orange juice come together for a smoothie that tastes like summer in a cup.",
      img: "/featured/f2.png",
      price: 6.3,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
    {
      id: 3,
      title: "Berry Bliss",
      desc: "A sweet fusion of strawberries, blueberries, and raspberries blended to icy perfection—tart, tangy, and totally refreshing.",
      img: "/featured/f3.png",
      price: 5.9,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
    {
      id: 4,
      title: "Tropical Tango",
      desc: "Pineapple, mango, and coconut milk dance together in this creamy tropical smoothie dream.",
      img: "/featured/f4.png",
      price: 6.5,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
    {
      id: 5,
      title: "Minty Melon Chill",
      desc: "Cool down with watermelon, cucumber, and a hint of mint—blended into a light and hydrating slush.",
      img: "/featured/f5.png",
      price: 5.5,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
  
    {
      id: 6,
      title: "Matcha Magic",
      desc: "Smooth, creamy matcha with a splash of oat milk and vanilla—earthy, energizing, and aesthetic.",
      img: "/featured/f6.png",
      price: 6.9,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
    {
      id: 7,
      title: "Blue Raspberry Slush",
      desc: "A bold and icy blue raspberry slushie—tangy, sweet, and wildly fun to sip.",
      img: "/featured/f7.png",
      price: 5.0,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
    {
      id: 8,
      title: "Peachy Keen",
      desc: "Juicy peaches, a touch of honey, and creamy yogurt make this smoothie as smooth as it sounds.",
      img: "/featured/f8.png",
      price: 6.4,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
    {
      id: 9,
      title: "Choco Banana Buzz",
      desc: "Bananas and rich chocolate swirl into a silky shake that's both a dessert and a pick-me-up.",
      img: "/featured/f9.png",
      price: 6.8,
      options: [
        { title: "Small", additionalPrice: 0 },
        { title: "Medium", additionalPrice: 1 },
        { title: "Large", additionalPrice: 2 },
      ],
    },
  ];
  
  export const singleProduct: Product = {
    id: 1,
    title: "Cookies & Cream Shake",
    desc: "A creamy, dreamy blend of vanilla milkshake and crushed cookies, topped with whipped cream and cookie crumbles.",
    img: "/featured/f1.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  };
  
  
  type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const menu: Menu = [
    {
      id: 1,
      slug: "slushies",
      title: "Chilled Slushies",
      desc: "Icy, fruity refreshers bursting with bold flavor and summertime vibes.",
      img: "/temporary/m1.png",
      color: "white",
    },
    {
      id: 2,
      slug: "shakes",
      title: "Indulgent Shakes",
      desc: "Rich, velvety milkshakes crafted with your favorite flavors and toppings.",
      img: "/temporary/m2.png",
      color: "black",
    },
    {
      id: 3,
      slug: "fresh-drinks",
    title: "Refreshed Drinks",
    desc: "Light blends of real fruit and goodness, perfect for any mood, any time.",
      img: "/temporary/m3.png",
      color: "white",
    },
  ];