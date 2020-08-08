import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";

class Button extends React.Component {
 static propTypes = { fetchImgAPI: PropTypes.func.isRequired };

 render() {
  return (
   <button onClick={this.props.fetchImgAPI} className={style.Button}>
    Load more
   </button>
  );
 }
}

export default Button;
