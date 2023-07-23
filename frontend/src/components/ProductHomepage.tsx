import { Link } from "react-router-dom";

const ProductHomepage = (props: {
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
    <Link to={`/products/${props.product.id}`}>
      <img
        src={`/assets/products/${props.product.id}.jpg`}
        alt={props.product.name}
      />
    </Link>
  );
};

export default ProductHomepage;
