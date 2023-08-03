import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import "../styles/pages/productSearchPage.scss";

import Filters from "../components/ProductSearchPage/Filters";
import Product from "../components/ProductSearchPage/Product";

const ProductSearchPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [searchText, setSeachText] = useState("");

  const PRODUCTS = [
    {
      id: "pid01",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      price: 30.12,
    },
    {
      id: "pid02",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      price: 30.12,
    },
    {
      id: "pid03",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      price: 30.12,
    },
    {
      id: "pid04",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      price: 30.12,
    },
    {
      id: "pid05",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      price: 30.12,
    },
    {
      id: "pid06",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      price: 30.12,
    },
    {
      id: "pid07",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      price: 30.12,
    },
    {
      id: "pid08",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      price: 30.12,
    },
  ];

  const [FILTERS, SETFILTERS] = useState([
    {
      name: "color",
      type: "color-list",
      list: ["white", "yellow", "blue", "black"],
      selected: ["white"],
      int0: 0,
      int1: 0,
    },
    {
      name: "style",
      type: "check-box",
      list: ["sneaker", "walking", "running", "casual", "outdoor"],
      selected: ["sneaker"],
      int0: 0,
      int1: 0,
    },
    {
      name: "price",
      type: "number-interval",
      list: [""],
      selected: [""],
      int0: 0,
      int1: 984,
    },
    {
      name: "gender",
      type: "radio",
      list: ["male", "female", "unisex"],
      selected: ["male"],
      int0: 0,
      int1: 0,
    },
  ]);

  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    if (searchParams.get("text")) {
      setSeachText(searchParams.get("text")!);
    }
  }, [searchParams]);

  const SearchHandler = (
    e:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    let url = "/search?text=" + encodeURIComponent(searchText);

    navigate(url);
  };

  return (
    <div className="product-search-page">
      <div className="search-bar">
        <input
          type="text"
          value={searchText}
          placeholder={searchText ? searchText : "Search in products..."}
          onChange={(e) => {
            setSeachText(e.currentTarget.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && SearchHandler(e);
          }}
        />
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={(e) => {
            SearchHandler(e);
          }}
        ></i>
      </div>
      <div className="filter-switch-btn">
        <button
          className={showFilters ? "show-filters" : "hide-filters"}
          onClick={() => {
            setShowFilters(!showFilters);
          }}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>
      <div className="container">
        {showFilters && <Filters filters={FILTERS} setFilters={SETFILTERS} />}
        <div className="products gallery-3">
          {PRODUCTS.map((product) => (
            <Product key={`product ${product.id}`} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSearchPage;
