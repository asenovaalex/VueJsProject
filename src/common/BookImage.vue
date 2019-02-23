<template>
    <div class="image-container">
      <img :src="getPoster" class="book-thumbnail"/>
    </div>
</template>

<script>
  import constants from '../../constants';
  export default {
    name: 'st-book-image',
    props: {
      poster: {
        smallThumbnail: String,
        thumbnail: String
      },
    },
    computed: {
      getPoster() {
        let poster = this.poster.smallThumbnail;
        if (!poster) {
          poster = '/static/images/default.jpg';
        }
        return poster;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .book-thumbnail {
    width: 189px;
  }
</style>
