<template>
    <b-nav-form>
      <b-form-input v-model="searchTerm" size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
      <b-button @click="searchBooks" size="sm" class="my-2 my-sm-0" type="submit">Search book</b-button>
    </b-nav-form>
</template>

<script>
  import actions from '../../store/action-types';
  export default {
    name: 'st-book-search',
    data() {
      return {
        searchTerm: '',
      };
    },
    methods: {
      searchBooks(){
        this.$store.dispatch(actions.GET_SEARCH_RESULTS, {q: this.searchTerm});
      }
    }
  };
</script>
