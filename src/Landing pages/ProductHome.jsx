import { Link, Route, Routes } from "react-router-dom";
import Sidebar from "../Sidebar/Index";
import MainContent from "../Components/MainContent";
import ProductPage from "../Components/ProductPage";
import TopSellers from "../Components/TopSellers";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
      <div>
      <h1 className="overflow-hidden text-sm font-serif font-bold mt-2 ml-2 text-[#ffa31a] xl:text-[1.6rem] lg:text-2xl md:text-xl sm:text-xl">DIMAR STORE🛍️</h1>
        <div className="flex dark:bg-neutral-900">
          <Sidebar className="dark:text-neutral-300" />
          <div className="w-auto flex justify-between flex-wrap">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </div>
          <div className="absolute right-0 top-0 lg:top-2">
            <TopSellers />

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="absolute right-0 top-1 bg-black h-6 w-16 text-[9px] lg:text-[16px] lg:h-10 lg:w-[8rem] md:text-[13px] md:w-19 md:h-8 md:py-1 sm:text-[10px] sm:w-[5.5rem] sm:h-7 text-center text-black rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white
                         hover:bg-gray-300 dark:hover:bg-gray-600 hover:border-blue-500 transition-colors duration-200"
              >
                {darkMode ? '🔆 Light Mode' : '🌙 Dark Mode'}
              </button>
          </div>
        </div>
        
      {/* Newsletter */}
      <div className="bg-gray-600 text-white mt-[5rem] py-16">
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
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4 dark:text-[#1bc8d3]">About</h3>
              <ul className="space-y-2 text-gray-600 dark:text-neutral-300">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 dark:text-[#1bc8d3]">Support</h3>
              <ul className="space-y-2 text-gray-600 dark:text-neutral-300">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 dark:text-[#1bc8d3]">Contact</h3>
              <ul className="space-y-2 text-gray-600 dark:text-neutral-300">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Email Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Live Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Store Locator
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 dark:text-[#1bc8d3]">Follow Us</h3>
              <div className="flex space-x-4 text-gray-600 dark:text-neutral-300">
                <Instagram className="w-6 h-6 hover:text-gray-900 cursor-pointer" />
                <Facebook className="w-6 h-6 hover:text-gray-900 cursor-pointer" />
                <Twitter className="w-6 h-6 hover:text-gray-900 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600 dark:text-neutral-300">
            <p>&copy; 2024 DIMAR STORE🛍️. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
  );
};

export default App;

