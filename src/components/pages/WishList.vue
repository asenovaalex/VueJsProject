<template>
  
</template>

<script>
  import StSearchFilter from '../common/SearchFilter';
  import StBookItem from '../common/BookItem';
  import StSelectRating from '../common/Rating';

  export default {
    name: 'wish-list',
    components: {
      StSearchFilter,
      StBookItem,
      StSelectRating,
    },
    computed: {
      getWishList() {
        const wishlist = this.$store.state.wishList;
        return wishlist;
      },
      getCurrentMovieTitle(){
        if(!this.$store.state.currentBook){
          return '';
        }
        return this.$store.state.currentBook.volumeInfo.title;
      }
    },

  };
</script>
