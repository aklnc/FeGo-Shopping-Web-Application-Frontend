import { Link } from "react-router-dom";

import "../../styles/components/Homepage/Product.scss";

const HomepageProduct = (props: {
  product: {
    id: string;
    category: string;
    seller: string;
    name: string;
    color?: string;
    price: number;
  };
}) => {
  return (
    <Link to={`/products?id=${props.product.id}`}>
      <div>
        <img
          src={`/assets/products/${props.product.id}.jpg`}
          alt={props.product.name}
          loading="lazy"
        />
        <p className="product-name">{props.product.name}</p>
        <div>
          <p className="product-price">$ {props.product.price} <i className="fa-solid fa-arrow-right"></i></p>
        </div>
      </div>
    </Link>
  );
};

export default HomepageProduct;
