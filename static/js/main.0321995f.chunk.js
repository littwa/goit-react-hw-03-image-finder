(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=a(6),i=a(2),s=a(3),m=a(5),u=a(4),h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:"",agreed:!0},e.handleChange=function(t){t.persist(),e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.forSubmitSearchbar(e.state.inputValue)},e.handleCheckbox=function(t){e.setState({agreed:t.target.checked}),e.props.onInfiniteScroll(t.target.checked)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"SearchForm"},r.a.createElement("label",{style:{width:160,fontSize:16,color:"#000"}},r.a.createElement("input",{type:"checkbox",checked:this.state.agreed,onChange:this.handleCheckbox}),"Infinite Scroll"),r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{onChange:this.handleChange,value:this.state.inputValue,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))}}]),a}(r.a.Component),g=function(e,t,a){return fetch("https://pixabay.com/api/?key=16717692-bb141906bc5c82eed9886cf8d&q=".concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=").concat(a)).then((function(e){return e.json()}))},f=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.modal;return r.a.createElement("li",{onClick:function(){n(a)},className:"ImageGalleryItem"},r.a.createElement("img",{src:t,alt:"pic",className:"ImageGalleryItem-image"}))};f.defaultProps={webformatURL:"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Image+placeholder",largeImageURL:"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Image+placeholder"};var p=f,d=function(e){var t=e.modal,a=e.images;return console.log("RENDER ImageGallery"),r.a.createElement("ul",{className:"ImageGallery"},a.map((function(e){return r.a.createElement(p,{key:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,modal:t})})),r.a.createElement("div",{className:"divForIntersectionObserver"}))},b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t){e.props.fetchImgAPI()},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.handleClick,className:"Button"},"Load more")}}]),a}(r.a.Component),v=a(9),y=a.n(v),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closeCallback=function(t){"Escape"===t.key&&e.props.closeModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeCallback)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeCallback)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{onClick:function(t){"IMG"!==t.target.nodeName&&e.props.closeModal()},className:"Overlay"},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:this.props.large,alt:"pic"})))}}]),a}(r.a.Component),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={openModal:!1,loading:!1,error:!1,InfiniteScroll:!0,query:"",images:[],pageNumbear:1,pageAmount:12,largeImageForModal:void 0},e.options={rootMargin:"50px",threshold:.5},e.onEntry=function(t,a){t.forEach((function(t){t.isIntersecting&&e.fetchImgAPI()}))},e.observer=new IntersectionObserver(e.onEntry,e.options),e.onInfiniteScroll=function(t){return e.setState({InfiniteScroll:t})},e.fetchImgAPI=function(){e.setState({loading:!0});var t=e.state,a=t.query,n=t.pageNumbear,r=t.pageAmount;g(a,n,r).then((function(t){var a=t.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}));e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(a)),pageNumbear:e.pageNumbear+=1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.forSubmitSearchbar=function(t){e.state.query!==t&&e.setState({query:t,images:[],pageNumbear:1})},e.openModalToggle=function(t){e.setState((function(){return{openModal:!e.state.openModal,largeImageForModal:t}}))},e}return Object(s.a)(a,[{key:"getSnapshotBeforeUpdate",value:function(e,t){return document.documentElement.scrollHeight-160}},{key:"componentDidUpdate",value:function(e,t,a){var n=document.querySelector(".divForIntersectionObserver");n&&this.state.InfiniteScroll&&this.observer.observe(n),t.query!==this.state.query&&this.fetchImgAPI(),t.images.length!==this.state.images.length&&t.images.length>0&&window.scrollTo({top:a,behavior:"smooth"})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{onInfiniteScroll:this.onInfiniteScroll,forSubmitSearchbar:this.forSubmitSearchbar}),this.state.images.length>0&&r.a.createElement(d,{modal:this.openModalToggle,images:this.state.images}),this.state.images.length>0&&!this.state.loading&&!this.state.InfiniteScroll&&r.a.createElement(b,{fetchImgAPI:this.fetchImgAPI}),this.state.loading&&r.a.createElement(y.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:document.documentElement.clientWidth}),this.state.error&&r.a.createElement("p",null,"Error, try again later"),this.state.openModal&&r.a.createElement(I,{closeModal:this.openModalToggle,large:this.state.largeImageForModal}))}}]),a}(r.a.Component);a(36);c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.0321995f.chunk.js.map