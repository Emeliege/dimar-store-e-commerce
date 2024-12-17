import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./Sidebar/Index";
import MainContent from "./Components/MainContent";
import ProductPage from "./Components/ProductPage";
import TopSellers from "./Components/TopSellers";
import { useState, useEffect } from "react";

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
    <Router>
      <div>
      <h1 className="text-sm font-serif font-bold mt-2 ml-2 text-[#ffa31a] xl:text-[1.6rem] lg:text-2xl md:text-xl sm:text-xl">DIMAR STORE 🛍️</h1>
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
      </div>
    </Router>
  );
};

export default App;
