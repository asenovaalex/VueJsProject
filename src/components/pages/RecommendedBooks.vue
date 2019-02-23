<template>
  <div class="container mt-3">
    <div class="row mb-3" v-if="getRecommendedBooks.length">
      <st-book-item
        v-for="(book) in getRecommendedBooks"
        :key="book.id"
        :id="book.id"
        :title="book.volumeInfo.title"
        :description="book.volumeInfo.description"
        :author="book.volumeInfo.author"
        :image="book.volumeInfo.imageLinks"
        :year="book.volumeInfo.publishedDate"
        :rating="book.volumeInfo.averageRating"
        @displayModal="displayModal"
      ></st-book-item>
    </div>
  </div>
</template>

<script>
  import StBookItem from '../common/BookItem';

  export default {
    name: 'recommended-books',
    components: {
      StBookItem,
    },
    methods: { 
        customCompare(a, b) { 
            if (a.volumeInfo.averageRating < b.volumeInfo.averageRating)
                return 1;
            if (a.volumeInfo.averageRating > b.volumeInfo.averageRating)
                return -1;
            return 0;
        }
    },
    computed: {
      getRecommendedBooks() {
        const recommendedBooks = this.$store.state.books.sort(this.customCompare).slice(0,3);

        return recommendedBooks;
      }
    },

  };
</script>
