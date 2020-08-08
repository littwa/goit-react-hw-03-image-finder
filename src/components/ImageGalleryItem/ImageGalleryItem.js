import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ webformatURL, largeImageURL, modal }) => {
 return (
  <li
   onClick={() => {
    modal(largeImageURL);
   }}
   className="ImageGalleryItem"
  >
   <img src={webformatURL} alt="pic" className="ImageGalleryItem-image" />
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
