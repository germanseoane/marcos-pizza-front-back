import React from "react";
import AppCarousel from "../Components/AppCarousel";
import "./ProductsScreen.css";

const ProductsScreen = () => {
  return (
    <div>
      <div className="categories">
        <h4 style={{ marginLeft: 40 }} className="items">
          Pizzas
        </h4>
        <h4 className="separator">/</h4>

        <h4 className="items">Chivitos</h4>
        <h4 className="separator">/</h4>
        <h4 className="items">Minutas</h4>
        <h4 className="separator">/</h4>
        <h4 className="items">Bebidas</h4>
        <h4 className="separator">/</h4>
        <h4 className="items" style={{ marginRight: 40 }}>
          Postres
        </h4>
      </div>
      Products Screen
    </div>
  );
};

export default ProductsScreen;
