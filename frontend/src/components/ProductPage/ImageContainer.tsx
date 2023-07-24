import { useState } from "react";

import '../../styles/components/ProductPage/imageContainer.scss'

const ImageContainer = (props: { productImages: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(
    props.productImages[0] || ""
  );
  const [imageNavigationIndex, setImageNavigationIndex] = useState(0);

  return (
    <div className="image-container">
      <img
        className="selected-image"
        src={`assets/products/${selectedImage}`}
        alt={`image_${props.productImages.indexOf(selectedImage) + 1}`}
      />
      <div className="other-images">
        <div
          className="image-navigators"
          onClick={() => {
            setImageNavigationIndex(
              imageNavigationIndex - 1 < 0
                ? props.productImages.length + imageNavigationIndex
                : imageNavigationIndex - 1
            );
          }}
        >
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <img
          className={
            props.productImages[
              imageNavigationIndex % props.productImages.length
            ] === selectedImage
              ? "selected"
              : ""
          }
          src={`assets/products/${
            props.productImages[
              imageNavigationIndex % props.productImages.length
            ]
          }`}
          alt={`image_${
            props.productImages.indexOf(props.productImages[0]) + 1
          }`}
          onClick={() => {
            setSelectedImage(
              props.productImages[
                imageNavigationIndex % props.productImages.length
              ]
            );
          }}
        />
        <img
          className={
            props.productImages[
              (imageNavigationIndex + 1) % props.productImages.length
            ] === selectedImage
              ? "selected"
              : ""
          }
          src={`assets/products/${
            props.productImages[
              (imageNavigationIndex + 1) % props.productImages.length
            ]
          }`}
          alt={`image_${
            props.productImages.indexOf(
              props.productImages[
                (imageNavigationIndex + 1) % props.productImages.length
              ]
            ) + 1
          }`}
          onClick={() => {
            setSelectedImage(
              props.productImages[
                (imageNavigationIndex + 1) % props.productImages.length
              ]
            );
          }}
        />
        <img
          className={
            props.productImages[
              (imageNavigationIndex + 2) % props.productImages.length
            ] === selectedImage
              ? "selected"
              : ""
          }
          src={`assets/products/${
            props.productImages[
              (imageNavigationIndex + 2) % props.productImages.length
            ]
          }`}
          alt={`image_${
            props.productImages.indexOf(
              props.productImages[
                (imageNavigationIndex + 2) % props.productImages.length
              ]
            ) + 1
          }`}
          onClick={() => {
            setSelectedImage(
              props.productImages[
                (imageNavigationIndex + 2) % props.productImages.length
              ]
            );
          }}
        />
        <img
          className={
            props.productImages[
              (imageNavigationIndex + 3) % props.productImages.length
            ] === selectedImage
              ? "selected"
              : ""
          }
          src={`assets/products/${
            props.productImages[
              (imageNavigationIndex + 3) % props.productImages.length
            ]
          }`}
          alt={`image_${
            props.productImages.indexOf(
              props.productImages[
                (imageNavigationIndex + 3) % props.productImages.length
              ]
            ) + 1
          }`}
          onClick={() => {
            setSelectedImage(
              props.productImages[
                (imageNavigationIndex + 3) % props.productImages.length
              ]
            );
          }}
        />
        <div
          className="image-navigators"
          onClick={() => {
            setImageNavigationIndex(imageNavigationIndex + 1);
          }}
        >
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
