import { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/components/ProductPage/productContainer.scss";

const ProductDetails = (props: {
  seller: { id: string; name: string };
  name: string;
  price: number;
  liked: boolean;
  inBasket: boolean;
  details: string[];
}) => {
  const [liked, setLiked] = useState(props.liked);

  return (
    <div className="product-container">
      <p className="product-name">
        <Link to={`/sellers?id=${props.seller.id}`} className="seller">
          {props.seller.name}
        </Link>
        {props.name}
      </p>
      <div className="interactions">
        <div>
          <p className="price">$ {props.price}</p>
        </div>
        <div className="buttons">
          {liked ? (
            <i className="heart-icon fa-solid fa-heart" onClick={() => {setLiked(!liked)}}></i>
          ) : (
            <i className="heart-icon fa-regular fa-heart" onClick={() => {setLiked(!liked)}}></i>
          )}
          <i className="share-icon fa-solid fa-share-nodes"></i>
          <button>{props.inBasket ? "Go to Basket" : "Add to Basket"}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
