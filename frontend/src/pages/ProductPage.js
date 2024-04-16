import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const ProductPage = ({ products }) => {
  const { subcategory } = useParams();

  // Filter products based on subcategory
  const filteredProducts = products.filter(product => product.main_category === subcategory);

  useEffect(() => {
    document.title = `Products - ${subcategory}`;
  }, [subcategory]);

  return (
    <div>
      <Header/>
      <Menu products={products} />
      <h1>Products</h1>
      <h2>Subcategory: {subcategory}</h2>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <p>{product.name}</p>
            {/* Additional product details */}
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
  );
};

export default ProductPage;
