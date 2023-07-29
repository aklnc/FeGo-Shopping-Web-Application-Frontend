import { Link } from "react-router-dom";

import '../../styles/components/SellerPage/products.scss'

const Products = (props: { products: { id: string; price: number }[] }) => {
  return (
    <div className="product-gallery">
      {props.products.map((product) => (
        <div key={product.id} className="product">
          <div>
            <img
              src={`/assets/products/${product.id}.jpg`}
              alt={product.id}
              loading="lazy"
            />
          </div>
          <div className="sub-div">
            <p>{product.price}</p>
            <Link to={`/products?id=${product.id}`}>Go To Product...</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
