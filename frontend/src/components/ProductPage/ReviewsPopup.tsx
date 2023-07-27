import React, { useState } from "react";

import "../../styles/components/ProductPage/reviewsPopup.scss";

const ReviewsPopup = (props: {
  reviews: { name: string; point: number; comment: string; date: string }[];
  reviewMean: number;
  switchBtn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const SetStars = (point: number, type: "person" | "mean") => {
    let tempStars = [];
    if (type === "mean") {
      if (point % 1 >= 0.5) {
        point = parseInt("" + point) + 1;
      } else {
        point = parseInt("" + point);
      }
      for (let i = 0; i < point; i++) {
        tempStars.push(
          <i key={Math.random()} className="stars fa-solid fa-star"></i>
        );
      }
      for (let i = 0; i < 5 - point; i++) {
        tempStars.push(
          <i key={Math.random()} className="stars fa-regular fa-star"></i>
        );
      }
    } else {
      for (let i = 0; i < point; i++) {
        tempStars.push(
          <i key={Math.random()} className="stars fa-solid fa-star"></i>
        );
      }
      for (let i = 0; i < 5 - point; i++) {
        tempStars.push(
          <i key={Math.random()} className="stars fa-regular fa-star"></i>
        );
      }
    }
    return tempStars;
  };

  return (
    <div className="reviews-popup">
      <button onClick={() => props.switchBtn(false)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="reviews">
        {props.reviews.map((review, ind) => (
          <div key={`review_${ind}`} className="review">
            <div className="head">
              {SetStars(review.point, "person")} {review.name}
            </div>
            <div className="comment">
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPopup;
