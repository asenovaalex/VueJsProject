export default {
  getMovieById: state => id =>
    state.books.find(book => book.id === id),
  getRemainingWishList: state => id =>
    state.wishList.filter(book => book.id !== id)  
};
