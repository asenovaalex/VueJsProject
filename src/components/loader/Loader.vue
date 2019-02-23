<template>
  <div v-show="isLoading" class="loader"></div>
</template>

<script>
  export default {
    computed: {
      isLoading() {
        return this.$store.state.isLoading;
      },
    },
  };
</script>

