import "../styles/pages/homepage.scss";

// Components
import ProductHomepage from "../components/ProductHomepage";
import BrandHomepage from "../components/BrandHomepage";

const Homepage = () => {
  const FEATURED_PRODUCTS = [
    {
      id: "pid01",
      category: "shoes",
      seller: "Puma",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      color: "white",
      price: 30.12,
    },
    {
      id: "pid02",
      category: "shoes",
      seller: "Puma",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      color: "white",
      price: 30.12,
    },
    {
      id: "pid03",
      category: "shoes",
      seller: "Puma",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      color: "white",
      price: 30.12,
    },
    {
      id: "pid04",
      category: "shoes",
      seller: "Puma",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      color: "white",
      price: 30.12,
    },
    {
      id: "pid05",
      category: "shoes",
      seller: "Puma",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      color: "white",
      price: 30.12,
    },
    {
      id: "pid06",
      category: "shoes",
      seller: "Puma",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      color: "white",
      price: 30.12,
    },
    {
      id: "pid07",
      category: "shoes",
      seller: "Puma",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      color: "white",
      price: 30.12,
    },
    {
      id: "pid08",
      category: "shoes",
      seller: "Puma",
      name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
      color: "white",
      price: 30.12,
    },
  ];
  const FEATURED_BRANDS = [
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

  return (
    <div className="homepage">
      <div className="search-bar">
        <input type="text" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <h2 className="homepage-heading">Featured Products</h2>
      <div className="product-homepage gallery-4">
        {FEATURED_PRODUCTS.map((product) => (
          <ProductHomepage key={`product ${product.id}`} product={product} />
        ))}
      </div>

      <h2 className="homepage-heading">Featured Brands</h2>
      <div className="brand-homepage gallery-2">
        {FEATURED_BRANDS.map((brand) => (
          <BrandHomepage key={`brand ${brand.id}`} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
