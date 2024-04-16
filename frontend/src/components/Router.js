import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Body from "./Body";
import ProductPage from "../pages/ProductPage"; // Update import path
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

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

  const Layout = () => {
    return (
      <>
        <Header />
        <Menu mainCategories={mainCategories} products={products} />
        <Body />
        <Footer />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/products/:mainCategory/*" element={<ProductPage />} /> {/* Remove products prop */}
      </Routes>
    </BrowserRouter>
  );
}
