import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
    ShoppingBag, 
    User, 
    Heart,
    ArrowRight,
    Star,
    Instagram,
    Facebook,
    Twitter,
    ChevronLeft,
    ChevronRight
  } from 'lucide-react';   

  const originalImages = [
    'https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_640.jpg',
    'https://cdn.pixabay.com/photo/2022/09/30/00/34/computer-7488371_640.jpg',
    'https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_640.jpg',
    'https://cdn.pixabay.com/photo/2017/03/14/11/41/perfume-2142824_640.jpg',
    'https://cdn.pixabay.com/photo/2022/01/05/14/14/camera-6917211_640.jpg',
    'https://cdn.pixabay.com/photo/2023/10/30/10/08/sofa-8352443_640.jpg',
    'https://cdn.pixabay.com/photo/2020/08/22/01/34/cellphones-5507342_640.jpg',
    'https://cdn.pixabay.com/photo/2013/09/26/11/59/leather-sofa-186636_640.jpg',
    'https://cdn.pixabay.com/photo/2015/01/28/12/56/cosmetic-614827_640.jpg'
  ];
  
  // Duplicate the array to create an infinite effect
  const images = [...originalImages, ...originalImages];
  
const ProductHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const resetToOriginal = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }, 0);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= originalImages.length) {
        resetToOriginal();
        return 0;
      }
      return nextIndex;
    });
  }, [resetToOriginal]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      if (nextIndex < 0) {
        setCurrentIndex(originalImages.length - 1);
        return originalImages.length - 1;
      }
      return nextIndex;
    });
  }, []);

  useEffect(() => {
    // Increased speed: reduced interval from 2000ms to 1000ms
    const interval = setInterval(nextSlide, 1000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-1 flex items-center justify-start">
              <h1 className="text-2xl font-serif">DIMAR STORE🛍️</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                New Arrivals
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Customer Service
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Gift Cards
              </a>
            </div>
            <div className="flex-1 flex items-center justify-end space-x-6">
              <User className="w-5 h-5 text-gray-700 cursor-pointer" />
              <Heart className="w-5 h-5 text-gray-700 cursor-pointer" />
              <ShoppingBag className="w-5 h-5 text-gray-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://cdn.pixabay.com/photo/2016/05/28/00/06/gift-1420830_1280.jpg"
            alt="Gift Image"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-lg">
            <h2 className="text-4xl font-serif text-white mb-4">
              The Best Collection
            </h2>
            <p className="text-lg text-gray-200 mb-8">
                Shop Or Gift Your Loved Ones Today From The Comfort Of Your Home
            </p>
            <Link to="/producthome">
            <button className="bg-white text-gray-900 px-8 py-3 flex items-center space-x-2 hover:bg-gray-100 transition-colors">
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/producthome">
          <div className="relative group cursor-pointer">
            <img
              src="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
              alt="Furniture"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-2xl font-serif mb-2">Furnitures</h3>
                <p className="text-gray-200">View Collection</p>
              </div>
            </div>
          </div>
          </Link>
          <Link to="/producthome">
          <div className="relative group cursor-pointer">
            <img
              src="https://cdn.pixabay.com/photo/2018/08/27/15/09/safe-3635196_640.jpg"
              alt="Perfume"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-2xl font-serif mb-2">Fragrance</h3>
                <p className="text-gray-200">View Collection</p>
              </div>
            </div>
          </div>
          </Link>
          <Link to="/producthome">
          <div className="relative group cursor-pointer">
            <img
              src="https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_640.jpg"
              alt="Makeup"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-2xl font-serif mb-2">
                  Beauty
                </h3>
                <p className="text-gray-200">View Collection</p>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">
            Trending Now
          </h2>
        
        <div className="relative">
          <div className="flex gap-4 overflow-hidden">
            {images.slice(currentIndex, currentIndex + 8).map((image, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="w-1/4 aspect-[4/3] transition-transform duration-100 ease-in-out" // Reduced duration from 500ms to 300ms
                style={{
                  transform: `translateX(${-currentIndex * 100}%)`,
                  transition: isTransitioning ? 'none' : 'transform 100ms ease-in-out' // Reduced duration here as well
                }}
              >
                <img
                  src={`${image}?auto=format&fit=crop&w=800&q=80`}
                  alt={`Slide ${index + currentIndex + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

      {/* Newsletter */}
      <div className="bg-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif mb-4">Join Our Newsletter</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-gray-900 focus:outline-none"
            />
            <button className="bg-white text-gray-900 px-8 py-3 ml-2 hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Email Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Live Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Store Locator
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
                <Facebook className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>&copy; 2024 DIMAR STORE🛍️. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductHome;
