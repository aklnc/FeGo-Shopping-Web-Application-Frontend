import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import "../styles/pages/productSearchPage.scss";

import Filters from "../components/ProductSearchPage/Filters";

const ProductSearchPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [searchText, setSeachText] = useState("");

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
      type: "radio",
      list: ["sneaker", "walking", "running", "casual", "outdoor"],
      selected: ["white"],
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

  const [showFilters, setShowFilters] = useState(false);

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
      <button
        className={
          showFilters ? "show-filters filter-switch-btn" : "filter-switch-btn"
        }
        onClick={() => {
          setShowFilters(!showFilters);
        }}
      >
        {showFilters ? "Narrow Filters" : "Show Filters"}
      </button>
      <div className="grid-container">
        <Filters filters={FILTERS} setFilters={SETFILTERS} />
        <div className="products"></div>
      </div>
    </div>
  );
};

export default ProductSearchPage;
