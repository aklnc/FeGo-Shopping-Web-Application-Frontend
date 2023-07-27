import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import "../styles/pages/productPage.scss";

import ImageContainer from "../components/ProductPage/ImageContainer";
import ProductDetails from "../components/ProductPage/ProductDetails";
import Details from "../components/ProductPage/Details";
import Reviews from "../components/ProductPage/Reviews";
import ReviewsPopup from "../components/ProductPage/ReviewsPopup";
import Properties from "../components/ProductPage/Properties";
import AskToSeller from "../components/ProductPage/AskToSeller";
import AskToSellerPopup from "../components/ProductPage/AskToSellerPopup";

const ProductPage = () => {
  // The pid will be used for fetch request
  const [searchParams] = useSearchParams();
  const pid = searchParams.get("id");

  const PRODUCT = {
    id: "pid01",
    liked: true,
    inBasket: false,
    seller: { id: "sid01", name: "Puma" },
    name: "HUMMEL Nielsen - Unisex Beyaz Ayakkabı 207897",
    price: 30.12,
    details: [
      "Free returns within 15 days.",
      "Hummel NIELSEN LIFESTYLE SHOES",
      "A maximum of 10 orders can be placed for this product. Trendyol reserves the right to cancel orders over 10 units.",
      "More than 100 stocks were offered to be sold at the campaign price.",
      "A product can be sold by more than one seller. Sellers of products offered for sale by more than one seller are listed according to the price they set for the product, seller ratings, delivery status, promotions on the products, whether the cargo is free or not, whether the products can be delivered with fast delivery, and the stock and categories of the products.",
    ],
    properties: [
      { name: "Type of Binding", description: "Lace-up" },
      { name: "Color", description: "White" },
      { name: "Heel Type", description: "Flat Heel" },
      { name: "Pattern", description: "Straight" },
      { name: "Material", description: "Polyurethane" },
      { name: "Heel Length", description: "Short Heels (1- 4 cm)" },
      { name: "Environment", description: "Sportswear" },
      { name: "Fabric Type", description: "Knitting" },
      { name: "Material Component", description: "100% Artificial Leather" },
    ],
    images: [
      "pid_sample01.jpg",
      "pid_sample02.jpg",
      "pid_sample03.jpg",
      "pid_sample04.jpg",
      "pid_sample05.jpg",
      "pid_sample06.jpg",
      "pid_sample07.jpg",
      "pid_sample08.jpg",
    ],
    reviews: [
      {
        name: "M. Y.",
        point: 5,
        comment:
          "It is very nice and comfortable, you can get your own number, it looks very stylish, I like it very much",
        date: "April 3, 2022",
      },
      {
        name: "A. K.",
        point: 4,
        comment:
          "It arrived quickly and without any problems. I got my exact size, it really fits my foot perfectly and it's a very comfortable shoe. I say get it without thinking.",
        date: "April 12, 2022",
      },
      {
        name: "Ö. K.",
        point: 4,
        comment:
          "You should definitely buy 1 size smaller, it is a very comfortable and useful shoe.",
        date: "January 3, 2023",
      },
      {
        name: "M. C.",
        point: 5,
        comment:
          "The product is very comfortable. You can get your own number. Packaging was pretty good.",
        date: "April 11, 2022",
      },
      {
        name: "E. T. B.",
        point: 4,
        comment:
          "I wear size 39, I bought 39 but I don't know why, it seems like one size is too big for me but I still love it, it's very comfortable",
        date: "February 12, 2021",
      },
      {
        name: "M. U.",
        point: 5,
        comment:
          "My parcel came to me without any problems, it's very nice, I like it very much, you can definitely get your own number.",
        date: "24 Mart 2023",
      },
      {
        name: "Billy O.",
        point: 4,
        comment:
          "very comfortable, very comfortable, buy one size smaller than your own size",
        date: "17 April 2022",
      },
      {
        name: "G. A.",
        point: 4,
        comment:
          "I bought the shoe 1 size smaller by looking at the comments, but it didn't work, I returned it and got my own size. It's a really stylish shoe.",
        date: "March 18, 2023",
      },
    ],
    reviewMean: 4.21,
    askToSeller: [
      {
        name: "E. Ö.",
        question: "When will stocks of finished numbers arrive?",
        answer:
          'The stocks of our products are updated periodically, if you want to be informed when the stock is available, you can use the "Notify When Available" feature and follow up.',
        date: "July 8, 2023",
      },
      {
        name: "M. B.",
        question: "when will number 39 come",
        answer:
          'The stocks of our products are updated periodically, if you want to be informed when the stock is available, you can use the "Notify When Available" feature and follow up.',
        date: "July 6, 2023",
      },
      {
        name: "D. T.",
        question: "when will number 37 come",
        answer:
          'The stocks of our products are updated periodically, if you want to be informed when the stock is available, you can use the "Notify When Available" feature and follow up.',
        date: "June 3, 2023",
      },
    ],
    asktoSellerTotal: 672,
  };

  const [showReviewsPopup, setShowReviewsPopup] = useState(false);
  const [showAskToSEllerPopup, setAskToSellerPopup] = useState(false);

  return (
    <div className="product-page">
      <div className="grid-layout">
        <ImageContainer productImages={PRODUCT.images} />
        <div>
          <ProductDetails
            seller={PRODUCT.seller}
            name={PRODUCT.name}
            price={PRODUCT.price}
            liked={PRODUCT.liked}
            inBasket={PRODUCT.inBasket}
            details={PRODUCT.details}
          />
          <Details details={PRODUCT.details} />
        </div>
      </div>
      {showReviewsPopup ? (
        <ReviewsPopup
          reviews={PRODUCT.reviews}
          reviewMean={PRODUCT.reviewMean}
          switchBtn={setShowReviewsPopup}
        />
      ) : (
        <Reviews
          reviews={PRODUCT.reviews}
          reviewMean={PRODUCT.reviewMean}
          switchBtn={setShowReviewsPopup}
        />
      )}
      <Properties properties={PRODUCT.properties} />
      {showAskToSEllerPopup ? (
        <AskToSellerPopup
          questions={PRODUCT.askToSeller}
          askToSellerTotal={PRODUCT.asktoSellerTotal}
          switchBtn={setAskToSellerPopup}
        />
      ) : (
        <AskToSeller
          questions={PRODUCT.askToSeller}
          askToSellerTotal={PRODUCT.asktoSellerTotal}
          switchBtn={setAskToSellerPopup}
        />
      )}
    </div>
  );
};

export default ProductPage;
