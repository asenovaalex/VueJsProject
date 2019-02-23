<template>
  <div class="col-md-6">
    <div class="card flex-row mt-3 book-container">
      <st-book-image :poster="image"></st-book-image>
      <div class="book-info d-flex flex-column p-3">
        <st-book-rating :rating="rating"></st-book-rating>
        <h5>{{ title }}</h5>
        <p class="text-dark"><span>{{ year | moment("MMMM D Y") }}</span>
        <p class="text-black-50 description-info">{{ description }}</p>
        <div class="mt-auto d-flex justify-content-between">
          <b-button @click="addToWishList" :variant="isInWishList.color">{{isInWishList.text}}</b-button>
          <b-button @click="viewMovieDetails" variant="success">View details</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import constants from '../../constants';
  import StBookImage from './BookImage';
  import StBookRating from './BookRating';
  import mutations from '../../store/mutation-types';

  export default {
    name: 'st-book-item',
    props: {
      image: {
        smallThumbnail: String,
        thumbnail: String
      },
      id: String,
      description: String,
      author: String,
      rating: Number,
      title: String,
      year: String,
    },
    components: {
      StBookImage,
      StBookRating,
    },
    computed: {
      isInWishList() {
        if(this.$store.state.wishList.filter(book => book.id == this.id).length){
          return { 
            color: 'warning',
            InWishList: true,
            text: "Remove"
          };
        }
        return { 
            color: 'success',
            InWishList: false,
            text: 'Add to wishlist'
          };
      }
    },
    methods: {
        addToWishList(){
          if(this.isInWishList.InWishList){
            const updatedWishList = this.$store.getters.getRemainingWishList(this.id);
            this.$store.commit(mutations.SET_WISHLIST, updatedWishList);
          }else{
            const book = this.$store.getters.getMovieById(this.id);
            this.$store.commit(mutations.ADD_TO_WISHLIST, book);
          }
        },
        viewMovieDetails(){
          this.setCurrentMovie();
          this.$router.push({ name: 'Boo', params: { id: this.id} });
        },
        setCurrentMovie(){
          const currentMovie = this.$store.getters.getMovieById(this.id);
          this.$store.commit(mutations.SET_CURRENT_MOVIE, currentMovie);
        },
        displayRateModal(){
          this.setCurrentMovie();
          this.$emit('displayModal');
        }
    }

  };
</script>

<style lang="scss" scoped>
  .book-thumbnail {
    width: 189px;
  }
  .description-info {
    max-height: 66px;
    overflow: hidden;
    font-size: .875rem;
  }
  .book-container {
    max-height: 286px;
  }
  .fav-icon {
    cursor: pointer;
    &.active {
      color: orange;
    }
  }
</style>
