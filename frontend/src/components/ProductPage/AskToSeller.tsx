import React from "react";

import "../../styles/components/ProductPage/askToSeller.scss";

const AskToSeller = (props: {
  questions: { name: string; question: string; answer: string; date: string }[];
  askToSellerTotal: number;
  switchBtn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <React.Fragment>
      <h2 className="sub-headings">Ask To Seller ({props.askToSellerTotal})</h2>
      <div className="ask-to-seller">
        {props.questions.map(
          (item, ind) =>
            ind < 3 && (
              <div key={`question_${ind}`} className="question-item">
                <div className="question-head">
                  <p>
                    <b>
                      {item.name} ({item.date})
                    </b>
                    : {item.question}
                  </p>
                </div>
                <div className="question-sub">
                  <p>
                    <b>Answer:</b> {item.answer}
                  </p>
                </div>
              </div>
            )
        )}
        <button
          className="see-all-questions-btn"
          onClick={() => props.switchBtn(true)}
        >
          See all questions <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </React.Fragment>
  );
};

export default AskToSeller;
