import { Link } from "react-router-dom";

const BrandHomepage = (props: {
  brand: {
    id: string;
    category: string;
    seller: string;
    name: string;
  };
}) => {
  return (
    <Link to={`/brands/${props.brand.id}`}>
      <img
        src={`/assets/brands/${props.brand.id}.webp`}
        alt={props.brand.name}
      />
    </Link>
  );
};

export default BrandHomepage;
