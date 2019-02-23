<template>
  <div class="container mt-3">
    <div class="row">
        <div class="col-sm-3 font-weight-bold">total: {{getTotal}}</div>
        <st-search-filter v-show="filteredResults.length" v-model="searchValue" pholder="Търси"></st-search-filter>
    </div>
    <p v-show="!filteredResults.length" class="text-center p-3">Няма намерени книги</p>
    <div class="row mb-3" v-if="filteredResults.length">
      <st-book-item
        v-for="(book) in filteredResults"
        :key="book.id"
        :id="book.id"
        :title="book.volumeInfo.title"
        :description="book.volumeInfo.description"
        :author="book.volumeInfo.author"
        :image="book.volumeInfo.imageLinks"
        :year="book.volumeInfo.publishedDate"
        @displayModal="displayModal"
      ></st-book-item>
    </div>
  </div>
</template>

<script>
  import StSearchFilter from '../common/SearchFilter';
  import StBookItem from '../common/BookItem';
  import mutations from '../../store/mutation-types';

  export default {
    name: 'book-list',
    components: {
      StSearchFilter,
      StBookItem,
    },
    data() {
      return {
        searchValue: '',
        rating: 5
      };
    },
    computed: {
      filteredResults() {
        const searchVal = this.searchValue.toLowerCase();
        const books = this.$store.state.books;

        const filteredBooks = books.filter(book => {
          if(book.volumeInfo.authors === '') { 
            books.volumeInfo.author = book.volumeInfo.publisher
          } else if (!book.volumeInfo.averageRating) { 
            book.volumeInfo.averageRating = parseFloat("3.9")
          }

            return book.volumeInfo.title.toLowerCase().indexOf(searchVal) !== -1;          
        });
        this.$store.commit(mutations.SET_TOTAL_RESULTS, filteredBooks.length);
        return filteredBooks;
      },

      getTotal() { 
        return this.$store.state.totalResults;
      }
    },

  };
</script>
