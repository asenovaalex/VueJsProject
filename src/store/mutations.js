import mutations from './mutation-types';

export default {
  [mutations.SET_BOOKS](state, books) {
    state.books = books;
  },
  [mutations.SET_TOTAL_RESULTS](state, totalResults) {
    state.totalResults = totalResults;
  },
  // [mutations.SET_RESULT_TYPE](state, resultType) {
  //   state.resultType = resultType;
  // },
  [mutations.ADD_TO_WISHLIST](state, book) {
    state.wishList.push(book);
  },
  [mutations.SET_WISHLIST](state, books) {
    state.wishList = books;
  },
  [mutations.SET_CURRENT_BOOK](state, book) {
    state.currentBook = book;
  },
};
