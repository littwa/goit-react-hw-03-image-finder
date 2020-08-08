import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
 static propTypes = { fetchImgAPI: PropTypes.func.isRequired };

 handleClick = e => {
  this.props.fetchImgAPI();
 };

 render() {
  return (
   <button onClick={this.handleClick} className={"Button"}>
    Load more
   </button>
  );
 }
}

export default Button;
