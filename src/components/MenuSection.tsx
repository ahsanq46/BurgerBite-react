import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { menuItems, menuCategories, dietaryOptions } from '../data/menuData';
import MenuItem from './MenuItem';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilters, setDietaryFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  
  const handleDietaryFilterChange = (filter: string) => {
    if (dietaryFilters.includes(filter)) {
      setDietaryFilters(dietaryFilters.filter(f => f !== filter));
    } else {
      setDietaryFilters([...dietaryFilters, filter]);
    }
  };
  
  const filteredItems = menuItems.filter(item => {
    // Category filter
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    // Dietary filter
    const matchesDietary = dietaryFilters.length === 0 || 
      dietaryFilters.every(filter => item.dietaryInfo.includes(filter));
    
    // Search query
    const matchesSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesDietary && matchesSearch;
  });

  return (
    <section id="menu" className="section-padding bg-neutral">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide selection of handcrafted burgers, crispy sides, refreshing beverages, and sweet desserts.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-primary focus:border-primary"
            />
          </div>
          
          <div className="md:relative">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white hover:bg-gray-50"
            >
              <Filter className="h-5 w-5" />
              <span>Dietary Filters</span>
            </button>
            
            {isFilterOpen && (
              <div className="mt-2 md:absolute md:right-0 md:mt-0 z-10 w-64 bg-white rounded-lg shadow-lg p-4">
                <h4 className="font-medium mb-2">Dietary Options</h4>
                <div className="space-y-2">
                  {dietaryOptions.map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={dietaryFilters.includes(option)}
                        onChange={() => handleDietaryFilterChange(option)}
                        className="rounded text-primary focus:ring-primary"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Categories */}
        <div className="flex overflow-x-auto py-2 mb-8 scrollbar-hide">
          <div className="flex space-x-2 min-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              All
            </button>
            
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Menu Items */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No menu items match your filters. Try changing your selections.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;