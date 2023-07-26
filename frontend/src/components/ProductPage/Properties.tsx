import React from "react";
import "../../styles/components/ProductPage/properties.scss";

const Properties = (props: {
  properties: { name: string; description: string }[];
}) => {
  return (
    <React.Fragment>
      <h2 className="sub-headings">Properties</h2>
      <div className="properties">
        {props.properties.map((property, ind) => (
          <React.Fragment key={`property_${ind}`}>
            <div className="name">
              <p>{property.name}</p>
            </div>
            <div className="description">
              <p>{property.description}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Properties;
