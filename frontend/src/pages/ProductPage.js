import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const ProductPage = () => {
  const { mainCategory, subCategory } = useParams();

  // You can fetch product details based on mainCategory and subCategory here

  return (
    <div>
      <h1>Product Page</h1>
      <h2>Main Category: {mainCategory}</h2>
      <h2>Sub Category: {subCategory}</h2>
      {/* Display product details here */}
    </div>
  );
};

export default ProductPage;
