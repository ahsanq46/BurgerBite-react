import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

interface HeaderProps {
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const Header = ({ isCartOpen, setIsCartOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#menu', label: 'Menu' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="font-heading text-2xl font-bold text-primary flex items-center gap-2">
            <span>BurgerBite</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-primary' : 'text-gray-800 hover:text-primary'}`}
            >
              {link.label}
            </a>
          ))}
          <button onClick={() => setIsCartOpen(true)} className="relative">
            <ShoppingBag className={`${isScrolled ? 'text-gray-800' : 'text-gray-800'} w-6 h-6`} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
          <a href="#menu" className="btn btn-primary">Order Now</a>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={() => setIsCartOpen(true)} className="relative mr-2">
            <ShoppingBag className="text-gray-800 w-6 h-6" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-800"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Solid Background */}
      {isMenuOpen && (
        <div className={`md:hidden ${isScrolled ? 'bg-white' : 'bg-opacity-90 bg-white'} shadow-lg py-5 transition-all duration-300`}>
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="font-medium text-gray-800 hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#menu" className="btn btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
              Order Now
            </a>
          </div>
        </div>
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
