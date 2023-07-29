import { Link } from "react-router-dom";

const HomepageSeller = (props: {
  seller: {
    id: string;
    category: string;
    seller: string;
    name: string;
  };
}) => {
  return (
    <Link to={`/sellers?id=${props.seller.id}`}>
      <img
        src={`/assets/sellers/${props.seller.id}.webp`}
        alt={props.seller.name}
        loading="lazy"
      />
    </Link>
  );
};

export default HomepageSeller;
