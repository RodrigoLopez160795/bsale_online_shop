import { Navbar } from '../../components/navbar.js';
import { ProductsList } from '../../components/productsList.js';
import {
  listenCategories,
  listenFilters,
  listenSearch,
  listenShowCategories,
  listenShowFilters,
} from './homelisteners.js';

function render(products, notFound) {
  return `
        ${Navbar()}
        ${ProductsList(products, notFound)}
    `;
}

function HomePage(products = [], notFound = false) {
  return {
    toString() {
      return render(products, notFound);
    },
    addListeners() {
      listenSearch();
      listenShowFilters();
      listenShowCategories();
      listenCategories();
      listenFilters();
    },
  };
}

export default HomePage;
