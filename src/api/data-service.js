import networkClient from './network-client';

export default {
  getSearchResults(params, success, failure) {
    networkClient.get('volumes', success, failure, params);
  }
};
