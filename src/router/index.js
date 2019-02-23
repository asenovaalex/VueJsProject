import Vue from 'vue';
import Router from 'vue-router';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import Home from '../components/common/Home';
import BookList from '../components/pages/BookList';
import WishList from '../components/pages/WishList';
import RecommendedBooks from '../components/pages/RecommendedBooks';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        navigation: Navigation,
        default: Home,
      },
    },
    
    {
      path: '/books',
      name: 'Books',
      components: {
        navigation: Navigation,
        default: BookList,
        footer: Footer,
      },
    },
    {
      path: '/recommended-books',
      name: 'Recommended Books',
      components: {
        navigation: Navigation,
        default: RecommendedBooks,
        footer: Footer,
      },
    },
  ],
});