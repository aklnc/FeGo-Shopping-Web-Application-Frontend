import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/pages/homepage.scss";

// Components
import HomepageProduct from "../components/Homepage/Product";
import HomepageSeller from "../components/Homepage/Seller";

const Homepage = () => {
  const navigate = useNavigate()

  const FEATURED_PRODUCTS = [
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
  const FEATURED_SELLERS = [
    {
      id: "bid01",
      category: "clothing",
      seller: "Koton",
      name: "Koton",
    },
    {
      id: "bid02",
      category: "clothing",
      seller: "Koton",
      name: "Koton",
    },
    {
      id: "bid03",
      category: "clothing",
      seller: "Koton",
      name: "Koton",
    },
    {
      id: "bid04",
      category: "clothing",
      seller: "Koton",
      name: "Koton",
    },
    {
      id: "bid05",
      category: "clothing",
      seller: "Koton",
      name: "Koton",
    },
    {
      id: "bid06",
      category: "clothing",
      seller: "Koton",
      name: "Koton",
    },
    {
      id: "bid07",
      category: "clothing",
      seller: "Koton",
      name: "Koton",
    },
    {
      id: "bid08",
      category: "clothing",
      seller: "Koton",
      name: "Koton",
    },
  ];

  const [searchText, setSeachText] = useState("");

  const SearchHandler = (e: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    let url = "/search?text=" + encodeURIComponent(searchText)

    navigate(url)
  };

  return (
    <div className="homepage">
      <div className="search-bar">
        <input
          type="text"
          value={searchText}
          placeholder="Search in products..."
          onChange={(e) => {
            setSeachText(e.currentTarget.value);
          }}
          onKeyDown={(e) => {(e.key === "Enter") && (SearchHandler(e))}}
        />
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={(e) => {
            SearchHandler(e);
          }}
        ></i>
      </div>

      <h2 className="homepage-heading">Featured Products</h2>
      <div className="homepage-product gallery-4">
        {FEATURED_PRODUCTS.map((product) => (
          <HomepageProduct key={`product ${product.id}`} product={product} />
        ))}
      </div>

      <h2 className="homepage-heading">Featured sellers</h2>
      <div className="homepage-seller gallery-2">
        {FEATURED_SELLERS.map((seller) => (
          <HomepageSeller key={`seller ${seller.id}`} seller={seller} />
        ))}
      </div>
      <div className="help-center">
        <h2>Help Center</h2>
        <ul>
          <Link to="/">
            <li>
              <i className="fa-solid fa-arrow-right"></i> How can I return a
              product?
            </li>
          </Link>
          <Link to="/">
            <li>
              <i className="fa-solid fa-arrow-right"></i> How can I have
              repaired in guarantee procedures?
            </li>
          </Link>
          <Link to="/">
            <li>
              <i className="fa-solid fa-arrow-right"></i> Where is my product?
              Get your product location.
            </li>
          </Link>
          <Link to="/">
            <li>
              <i className="fa-solid fa-arrow-right"></i>{" "}
              <b>Other complaints...</b>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
