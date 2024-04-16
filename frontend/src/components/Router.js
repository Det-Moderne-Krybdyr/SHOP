// Router.js

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Body from "./Body";
import ProductPage from "../pages/ProductPage"; // Update import path
import Guides from "../pages/Guides";
import About_us from "../pages/About_us";

export default function Router() {
  const [mainCategories, setMainCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        const productsData = response.data;
        setProducts(productsData);
        const categoriesSet = new Set(productsData.map(product => product.main_category));
        const mainCategoriesArray = Array.from(categoriesSet);
        setMainCategories(mainCategoriesArray);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  const Layout = ({ children }) => {
    return (
      <>
        <Header />
        <Menu mainCategories={mainCategories} products={products} />
        <div className="content">{children}</div>
        <Footer />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Body /></Layout>} />
        <Route path="/products/:mainCategory/:subCategory" element={<Layout><ProductPage /></Layout>} />
        <Route path="/guides" element={<Layout><Guides /></Layout>} />
        <Route path="/about_us" element={<Layout><About_us /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
