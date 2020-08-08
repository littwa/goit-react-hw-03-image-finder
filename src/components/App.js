import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import FetchImages from "./FetchImages/FetchImages";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "react-loader-spinner";
import Modal from "./Modal/Modal";

class App extends React.Component {
 state = {
  openModal: false,
  loading: false,
  error: false,
  noImages: false,
  InfiniteScroll: true,
  query: "",
  images: [],
  pageNumbear: 1,
  pageAmount: 12,
  largeImageForModal: undefined
 };

 getSnapshotBeforeUpdate(prevProps, prevState) {
  return document.documentElement.scrollHeight - 160;
 }

 componentDidUpdate(prevProps, prevState, snapshot) {
  //================IntersectionObserver===================================================
  let specDiv = document.querySelector(".divForIntersectionObserver");
  specDiv && this.state.InfiniteScroll && this.observer.observe(specDiv);
  //=======================================================================================
  if (prevState.query !== this.state.query) {
   this.fetchImgAPI();
  }

  if (prevState.images.length !== this.state.images.length && prevState.images.length > 0) {
   window.scrollTo({
    top: snapshot,
    behavior: "smooth"
   });
  }
 }

 //===================IntersectionObserver===================================================
 options = {
  rootMargin: "50px",
  threshold: 0.5
 };
 onEntry = (entries, observer) => {
  entries.forEach(entry => {
   entry.isIntersecting && this.fetchImgAPI();
  });
 };
 observer = new IntersectionObserver(this.onEntry, this.options);

 onInfiniteScroll = value => this.setState({ InfiniteScroll: value });
 //===============================================================================

 fetchImgAPI = () => {
  this.setState({ loading: true });
  let { query, pageNumbear, pageAmount } = this.state;

  FetchImages(query, pageNumbear, pageAmount)
   .then(data => {
    let arrImg = data.hits.map(el => ({
     id: el.id,
     webformatURL: el.webformatURL,
     largeImageURL: el.largeImageURL
    }));
    if (arrImg.length === 0) {
     this.setState({ noImages: true });
    }
    this.setState(prevState => ({
     images: [...prevState.images, ...arrImg],
     pageNumbear: (prevState.pageNumbear += 1)
    }));
   })
   .catch(error => this.setState({ error }))
   .finally(() => this.setState({ loading: false }));
 };

 forSubmitSearchbar = value => {
  if (this.state.query !== value) {
   this.setState({ query: value, images: [], pageNumbear: 1, noImages: false });
  }
 };

 openModalToggle = largeImageURL => {
  this.setState(() => ({ openModal: !this.state.openModal, largeImageForModal: largeImageURL }));
 };

 render() {
  return (
   <>
    <Searchbar onInfiniteScroll={this.onInfiniteScroll} forSubmitSearchbar={this.forSubmitSearchbar} />
    {this.state.images.length > 0 && <ImageGallery modal={this.openModalToggle} images={this.state.images} />}
    {this.state.images.length > 0 &&
     !this.state.loading &&
     !this.state.InfiniteScroll &&
     !this.state.noImages && <Button fetchImgAPI={this.fetchImgAPI} />}
    {this.state.loading && (
     <Loader type="ThreeDots" color="#3f51b5" height={80} width={document.documentElement.clientWidth} />
    )}
    {this.state.error && <p className={"notif"}>Error, try again later</p>}
    {this.state.noImages && <p className={"notif"}> No Images!!!</p>}

    {this.state.openModal && (
     <Modal closeModal={this.openModalToggle} large={this.state.largeImageForModal} />
    )}
   </>
  );
 }
}
export default App;
