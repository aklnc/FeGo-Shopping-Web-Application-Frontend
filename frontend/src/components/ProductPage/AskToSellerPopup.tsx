import React from "react";

import "../../styles/components/ProductPage/askToSellerPopup.scss";

const AskToSellerPopup = (props: {
  questions: { name: string; question: string; answer: string; date: string }[];
  askToSellerTotal: number;
  switchBtn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="ask-to-seller-popup">
      <button onClick={() => props.switchBtn(false)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="ask-to-seller">
        {props.questions.map((item, ind) => (
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
        ))}
      </div>
    </div>
  );
};

export default AskToSellerPopup;
