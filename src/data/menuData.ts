import { MenuItem } from '../types';

export const menuCategories = [
  "Burgers",
  "Sides",
  "Beverages",
  "Desserts",
  "Combos"
];

export const dietaryOptions = [
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Keto-Friendly"
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Cheeseburger',
    description: 'Our signature beef patty with melted cheddar, lettuce, tomato, pickles, and special sauce on a brioche bun.',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Burgers',
    dietaryInfo: [],
    allergens: ['Gluten', 'Dairy', 'Soy'],
    featured: true
  },
  {
    id: '2',
    name: 'Crispy Chicken Burger',
    description: 'Crispy fried chicken breast with lettuce, pickles, and honey mustard sauce on a toasted bun.',
    price: 9.99,
    image: 'https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Burgers',
    dietaryInfo: [],
    allergens: ['Gluten', 'Eggs']
  },
  {
    id: '3',
    name: 'Veggie Deluxe',
    description: 'Plant-based patty with avocado, grilled mushrooms, lettuce, tomato, and vegan aioli.',
    price: 10.49,
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Burgers',
    dietaryInfo: ['Vegetarian', 'Vegan'],
    allergens: ['Gluten', 'Nuts']
  },
  {
    id: '4',
    name: 'Double Bacon Deluxe',
    description: 'Two beef patties with crispy bacon, double cheese, caramelized onions, and BBQ sauce.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Burgers',
    dietaryInfo: [],
    allergens: ['Gluten', 'Dairy', 'Soy']
  },
  {
    id: '5',
    name: 'Golden French Fries',
    description: 'Crispy golden fries seasoned with our special salt blend.',
    price: 3.99,
    image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Sides',
    dietaryInfo: ['Vegetarian', 'Vegan'],
    allergens: []
  },
  {
    id: '6',
    name: 'Sweet Potato Fries',
    description: 'Crispy sweet potato fries with a hint of cinnamon.',
    price: 4.99,
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Sides',
    dietaryInfo: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    allergens: []
  },
  {
    id: '7',
    name: 'Onion Rings',
    description: 'Golden-fried onion rings with a crispy beer batter coating.',
    price: 4.49,
    image: 'https://images.pexels.com/photos/4676401/pexels-photo-4676401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Sides',
    dietaryInfo: ['Vegetarian'],
    allergens: ['Gluten']
  },
  {
    id: '8',
    name: 'Fresh Lemonade',
    description: 'Freshly squeezed lemons with a hint of mint and pure cane sugar.',
    price: 3.49,
    image: 'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Beverages',
    dietaryInfo: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    allergens: []
  },
  {
    id: '9',
    name: 'Chocolate Milkshake',
    description: 'Rich and creamy chocolate milkshake topped with whipped cream.',
    price: 5.99,
    image: 'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Beverages',
    dietaryInfo: ['Vegetarian'],
    allergens: ['Dairy']
  },
  {
    id: '10',
    name: 'Soft-Serve Ice Cream',
    description: 'Creamy vanilla and chocolate swirl soft-serve in a waffle cone.',
    price: 3.99,
    image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Desserts',
    dietaryInfo: ['Vegetarian'],
    allergens: ['Dairy', 'Gluten'],
    featured: true
  },
  {
    id: '11',
    name: 'Apple Pie',
    description: 'Warm apple pie with a flaky crust and cinnamon filling.',
    price: 4.99,
    image: 'https://images.pexels.com/photos/4886392/pexels-photo-4886392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Desserts',
    dietaryInfo: ['Vegetarian'],
    allergens: ['Gluten']
  },
  {
    id: '12',
    name: 'Family Feast',
    description: '4 burgers, 2 large fries, onion rings, and 4 drinks of your choice.',
    price: 39.99,
    image: 'https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Combos',
    dietaryInfo: [],
    allergens: ['Gluten', 'Dairy', 'Soy'],
    featured: true
  }
];