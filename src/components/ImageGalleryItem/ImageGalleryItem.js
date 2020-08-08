import React from "react";
import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, largeImageURL, modal }) => {
 return (
  <li
   onClick={() => {
    modal(largeImageURL);
   }}
   className={style.ImageGalleryItem}
  >
   <img src={webformatURL} alt="pic" className={style.ImageGalleryItemImage} />
  </li>
 );
};

ImageGalleryItem.propTypes = {
 webformatURL: PropTypes.string,
 largeImageURL: PropTypes.string,
 modal: PropTypes.func
};

ImageGalleryItem.defaultProps = {
 webformatURL: "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Image+placeholder",
 largeImageURL: "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Image+placeholder"
};

export default ImageGalleryItem;
