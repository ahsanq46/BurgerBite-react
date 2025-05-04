import { ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { menuItems } from '../data/menuData';

const HeroSection = () => {
  const { addToCart } = useCart();
  
  // Get the first featured menu item
  const featuredItem = menuItems.find(item => item.featured);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen-90 flex items-center justify-center bg-neutral">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container-custom relative z-10 text-center md:text-left md:grid md:grid-cols-2 md:gap-12 items-center">
        <div className="fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Delicious Food, <br className="hidden md:block" />
            <span className="text-secondary">Delivered Fast</span>
          </h1>
          <p className="text-lg text-white mb-8 max-w-lg">
            Award-winning burgers and sides made with the freshest ingredients, ready to satisfy your cravings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={scrollToMenu} className="btn btn-primary">
              View Menu
            </button>
            {featuredItem && (
              <button 
                onClick={() => {
                  addToCart(featuredItem);
                  scrollToMenu();
                }}
                className="btn btn-secondary"
              >
                Order Featured Item
              </button>
            )}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="bg-white p-6 rounded-xl shadow-2xl transform rotate-3 transition-transform hover:rotate-0 duration-300">
            <img 
              src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Delicious burger" 
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Today's Special</h3>
              <p className="text-primary font-semibold mt-1">Limited Time Offer!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <button onClick={scrollToMenu} className="text-white">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;