import "../../styles/components/ProductPage/details.scss";

const Details = (props: { details: string[] }) => {
  return (
    <div className="details">
      <ul>
        {props.details.map((detail, ind) => (
          <li key={`detail_${ind}`}><i className="fa-solid fa-arrow-right"></i>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
