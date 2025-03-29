import React, { useEffect, useState } from 'react';
import { Search, ShoppingCart, User, Heart, Bell, Menu } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-[#2874f0] text-white z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold italic">Flipkart</h1>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="w-[400px] py-2 px-4 rounded-sm text-black"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-1">
                <User size={20} />
                <span>Login</span>
              </button>
              <button className="flex items-center space-x-1">
                <Heart size={20} />
                <span>Wishlist</span>
              </button>
              <button className="flex items-center space-x-1">
                <ShoppingCart size={20} />
                <span>Cart</span>
              </button>
              <button>
                <Bell size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4">Welcome to Flipkart</h2>
            <p className="text-xl mb-8">India's Largest Online Shopping Destination</p>
            <button className="bg-[#2874f0] text-white px-8 py-3 rounded-sm hover:bg-blue-600 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">Category {item}</h3>
              <p className="text-gray-600">Explore our wide range of products</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gray-200 mb-4 rounded" />
                <h3 className="font-semibold mb-2">Product {item}</h3>
                <p className="text-green-600 font-semibold">₹999</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;