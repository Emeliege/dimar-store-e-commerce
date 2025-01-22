import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Landing pages/Homepage"
import ProductHome from "./Landing pages/ProductHome";
import ProductPage from "./Components/ProductPage";


function App() {
  return (
    <BrowserRouter>
      <div className="overflow-hidden sm:overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producthome/*" element={<ProductHome />} />
          <Route path="/product/:id" element={<ProductPage />} /> 
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
