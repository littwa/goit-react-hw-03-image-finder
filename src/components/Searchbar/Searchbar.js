import React from "react";
import PropTypes from "prop-types";
import style from "./Searchbar.module.css";

class Searchbar extends React.Component {
 static propTypes = {
  forSubmitSearchbar: PropTypes.func.isRequired
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

 render() {
  return (
   <header className={style.Searchbar}>
    <form onSubmit={this.handleSubmit} className={style.SearchForm}>
     <button type="submit" className={style.SearchFormButton}>
      <span className={style.SearchFormButtonLabel}>Search</span>
     </button>

     <input
      onChange={this.handleChange}
      value={this.state.inputValue}
      className={style.SearchFormInput}
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
