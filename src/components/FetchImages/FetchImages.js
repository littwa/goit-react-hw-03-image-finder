const FetchImages = (q, page, pageAmount) => {
 return fetch(
  `https://pixabay.com/api/?key=16717692-bb141906bc5c82eed9886cf8d&q=${q}&page=${page}&image_type=photo&orientation=horizontal&per_page=${pageAmount}`
 ).then(resp => resp.json());
};

export default FetchImages;
