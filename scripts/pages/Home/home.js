import { Navbar } from '../../components/navbar.js';
import { Product } from '../../components/product.js';
import {
  listenCategories,
  listenFilters,
  listenSearch,
  listenShowCategories,
  listenShowFilters,
} from './homelisteners.js';

function render() {
  return `
        ${Navbar()}
        ${Product()}
    `;
}

function HomePage() {
  return {
    toString() {
      return render();
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
