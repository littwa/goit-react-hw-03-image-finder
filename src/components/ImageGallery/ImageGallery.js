import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ modal, images }) => {
 console.log("RENDER ImageGallery");
 return (
  <ul className="ImageGallery">
   {images.map(el => (
    <ImageGalleryItem
     key={el.id}
     webformatURL={el.webformatURL}
     largeImageURL={el.largeImageURL}
     modal={modal}
    />
   ))}
   <div className="divForIntersectionObserver"></div>
  </ul>
 );
};

ImageGallery.propTypes = {
 modal: PropTypes.func.isRequired,
 images: PropTypes.array.isRequired
};

export default ImageGallery;
