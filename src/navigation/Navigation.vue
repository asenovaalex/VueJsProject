<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/wish-list">Моите книги</b-nav-item>
          <b-nav-item to="/books">Книги</b-nav-item>
          <b-nav-item to="/recommended-books">Препоръчани книги</b-nav-item>
        </b-navbar-nav> 
        <b-navbar-nav class="ml-auto">
          <st-book-search></st-book-search>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
  import StBookSearch from '../common/BookSearch';
  export default {
    components: {
      StBookSearch,
    },
    methods: {
      hasActiveApp() {
        const link = this.$router.resolve({
          name: appName,
        });
        if (link && link.href !== '/') {
          return true;
        }
        return false;
      },
    }
  };
</script>
