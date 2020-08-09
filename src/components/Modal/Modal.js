import React from "react";
import PropTypes from "prop-types";
import { Overlay, ModalStyle } from "./Modal.module.css";

class Modal extends React.Component {
 static propTypes = { closeModal: PropTypes.func.isRequired, large: PropTypes.string };

 myRef = React.createRef();

 componentDidMount() {
  this.myRef.current.focus();
 }

 render() {
  return (
   <div
    ref={this.myRef}
    onClick={e => e.target.nodeName !== "IMG" && this.props.closeModal()}
    onKeyDown={e => e.key === "Escape" && this.props.closeModal()}
    className={Overlay}
    tabIndex="0"
   >
    <div className={ModalStyle}>
     <img src={this.props.large} alt="pic" />
    </div>
   </div>
  );
 }
}

export default Modal;
