import { Navbar } from '../../components/navbar.js';
import { ProductsList } from '../../components/productsList.js';
import {
  listenCategories,
  listenFilters,
  listenSearch,
  listenShowCategories,
  listenShowFilters,
} from './homelisteners.js';

function render(products) {
  return `
        ${Navbar()}
        ${ProductsList(products)}
    `;
}

function HomePage(products = []) {
  return {
    toString() {
      return render(products);
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
