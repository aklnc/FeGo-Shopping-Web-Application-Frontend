import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import "../styles/pages/sellerPage.scss";

import Products from "../components/SellerPage/Products";

const SellerPage = () => {
  const [searchParams] = useSearchParams();
  const sid = searchParams.get("id");

  const [activeCategory, setActiveCategory] = useState(-1);

  const SELLER = {
    id: "sid01",
    name: "Puma",
    categories: ["Sneaker", "Walking", "Running", "T-Shirt", "Sport T-Shirt"],
  };

  const PRODUCTS = [
    {
      id: "pid01",
      price: 25.86,
    },
    {
      id: "pid02",
      price: 25.86,
    },
    {
      id: "pid03",
      price: 25.86,
    },
    {
      id: "pid04",
      price: 25.86,
    },
    {
      id: "pid05",
      price: 25.86,
    },
    {
      id: "pid06",
      price: 25.86,
    },
    {
      id: "pid07",
      price: 25.86,
    },
    {
      id: "pid08",
      price: 25.86,
    },
    {
      id: "pid09",
      price: 25.86,
    },
    {
      id: "pid10",
      price: 25.86,
    },
    {
      id: "pid11",
      price: 25.86,
    },
    {
      id: "pid12",
      price: 25.86,
    },
  ];

  const SelectCategoryHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    clickedCatagory: number
  ) => {
    e.preventDefault();

    if (activeCategory === clickedCatagory) {
      setActiveCategory(-1);
    } else {
      setActiveCategory(clickedCatagory);
    }
  };

  return (
    <div className="seller-page">
      <div className="search-bar">
        <input type="text" placeholder={`Search in ${SELLER.name}`} />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="categories">
        <ul className="category-list">
          {SELLER.categories.map((category, ind) => (
            <li
              key={`category_${ind}`}
              onClick={(e) => {
                SelectCategoryHandler(e, ind);
              }}
              className={activeCategory === ind ? "active" : ""}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <Products products={PRODUCTS} />
    </div>
  );
};

export default SellerPage;
