import React from "react";
import PropTypes from "prop-types";

class Modal extends React.Component {
 static propTypes = { closeModal: PropTypes.func.isRequired, large: PropTypes.string };

 componentDidMount() {
  window.addEventListener("keydown", this.closeCallback);
 }
 componentWillUnmount() {
  window.removeEventListener("keydown", this.closeCallback);
 }
 closeCallback = e => {
  if (e.key === "Escape") {
   this.props.closeModal();
  }
 };

 render() {
  return (
   <div
    onClick={e => {
     e.target.nodeName !== "IMG" && this.props.closeModal();
    }}
    className="Overlay"
   >
    <div className="Modal">
     <img src={this.props.large} alt="pic" />
    </div>
   </div>
  );
 }
}

export default Modal;
