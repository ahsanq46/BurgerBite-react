import { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { CartProvider } from './context/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-neutral-50 font-body">
        <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <HomePage />
      </div>
    </CartProvider>
  );
}

export default App;