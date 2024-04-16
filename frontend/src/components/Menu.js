import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styling/Menu.css";

const Menu = ({ mainCategories, products }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="Menu">
      {mainCategories &&
        mainCategories.map((category) => {
          const subcategories = products
            .filter((product) => product.main_category === category)
            .map((product) => product.sub_category);

          return (
            <div
              key={category}
              className="category-wrapper"
              onMouseEnter={() => handleMouseEnter(category)}
              onMouseLeave={handleMouseLeave}
            >
              <h3>{category}</h3>
              {hoveredCategory === category && (
                <div className="subcategories">
                  {subcategories.map((subcategory, index) => (
                    <Link
                      key={index}
                      to={`/products/${category}/${subcategory}`}
                    >
                      <p>{subcategory}</p>
                    </Link>
                  ))} 
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Menu;
