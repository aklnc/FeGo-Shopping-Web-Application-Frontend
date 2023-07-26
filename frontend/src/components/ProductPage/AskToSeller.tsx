import React from "react";

import "../../styles/components/ProductPage/askToSeller.scss";

const AskToSeller = (props: {
  questions: { name: string; question: string; answer: string; date: string }[];
  askToSellerTotal: number;
}) => {
  return (
    <React.Fragment>
      <h2 className="sub-headings">Ask To Seller ({props.askToSellerTotal})</h2>
      <div className="ask-to-seller">
        {props.questions.map(
          (item, ind) => ind < 3 && <div key={`question_${ind}`}>

          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default AskToSeller;
