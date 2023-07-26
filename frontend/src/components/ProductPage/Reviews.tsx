import React, { useState } from "react";

import "../../styles/components/ProductPage/reviews.scss";

const Reviews = (props: {
  reviews: { name: string; point: number; comment: string; date: string }[];
  reviewMean: number;
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
    <React.Fragment>
      <div className="summary">
        <h2 className="sub-headings">Reviews</h2>
        <div>
          {SetStars(props.reviewMean, "mean")} {props.reviewMean}
        </div>
      </div>
      <div className="reviews">
        {props.reviews.map(
          (review, ind) =>
            ind < 3 && (
              <div key={`review_${ind}`} className="review">
                <div className="head">
                  {SetStars(review.point, "person")} {review.name}
                </div>
                <div className="comment">
                  <p>{review.comment}</p>
                </div>
              </div>
            )
        )}
        <button className="see-all-reviews-btn">See all reviews <i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </React.Fragment>
  );
};

export default Reviews;
