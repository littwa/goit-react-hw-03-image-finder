import React from "react";
import PropTypes from "prop-types";

class Searchbar extends React.Component {
 static propTypes = {
  forSubmitSearchbar: PropTypes.func.isRequired,
  onInfiniteScroll: PropTypes.func.isRequired
 };

 state = {
  inputValue: "",
  agreed: true
 };
 handleChange = e => {
  e.persist();
  this.setState({ inputValue: e.target.value });
 };
 handleSubmit = e => {
  e.preventDefault();

  this.props.forSubmitSearchbar(this.state.inputValue);
 };
 handleCheckbox = e => {
  this.setState({ agreed: e.target.checked });
  this.props.onInfiniteScroll(e.target.checked);
 };
 render() {
  return (
   <header className="Searchbar">
    <form onSubmit={this.handleSubmit} className="SearchForm">
     <label style={{ width: 160, fontSize: 16, color: "#000" }}>
      <input type="checkbox" checked={this.state.agreed} onChange={this.handleCheckbox} />
      Infinite Scroll
     </label>

     <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
     </button>

     <input
      onChange={this.handleChange}
      value={this.state.inputValue}
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
     />
    </form>
   </header>
  );
 }
}

export default Searchbar;
