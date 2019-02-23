import mutations from './mutation-types';
import actions from './action-types';
import dataService from '../api/data-service';

export default {
  [actions.GET_BOOKS_DETAILS]({commit}, id) {
    dataService.getMovieDetails(
      id,
      (response) => {
        commit(mutations.SET_CURRENT_BOOK, response);
      },
      (error) => {
        console.log(error);
      },
    );
  },
  [actions.GET_SEARCH_RESULTS]({commit}, params) {
    dataService.getSearchResults(
      params,
      (response) => {
        commit(mutations.SET_BOOKS, response.items);
        commit(mutations.SET_TOTAL_RESULTS, response.totalItems);
      },
      (error) => {
        console.log(error);
      },
    );
  },
  [actions.GET_FILTERED_MOVIES]({commit}, params = {}) {
    commit(mutations.SET_LOADER, true);
    dataService.getFilteredMovies(
      params,
      (response) => {
        commit(mutations.SET_BOOKS, response.items);
        commit(mutations.SET_TOTAL_RESULTS, responseMovies.totalItems);
      },
      (error) => {
        console.log(error);
      },
    );
  },
};
