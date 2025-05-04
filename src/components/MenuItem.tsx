import { Info, Plus } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem = ({ item }: MenuItemProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const { addToCart } = useCart();

  return (
    <div className="menu-item group">
      <div className="relative overflow-hidden h-48">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.featured && (
          <div className="absolute top-3 right-3 bg-secondary text-gray-800 text-xs px-2 py-1 rounded-full font-medium">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p className="font-medium text-primary">${item.price.toFixed(2)}</p>
        </div>
        
        <p className="text-sm text-gray-600 mt-2 mb-4 line-clamp-2">
          {item.description}
        </p>
        
        {/* Dietary Info Tags */}
        {item.dietaryInfo.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {item.dietaryInfo.map((info) => (
              <span 
                key={info} 
                className="inline-block bg-neutral-dark text-xs px-2 py-1 rounded-full"
              >
                {info}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary transition-colors"
          >
            <Info className="w-4 h-4" />
            <span>{showDetails ? 'Hide Details' : 'View Details'}</span>
          </button>
          
          <button
            onClick={() => addToCart(item)}
            className="flex items-center gap-1 bg-primary text-white px-3 py-2 rounded-full hover:bg-primary-dark transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
        
        {/* Item Details */}
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
            {item.allergens.length > 0 && (
              <div className="mb-2">
                <span className="font-medium">Allergens: </span>
                {item.allergens.join(', ')}
              </div>
            )}
            <div>
              <span className="font-medium">Category: </span>
              {item.category}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;