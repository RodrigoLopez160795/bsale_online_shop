import { Navbar } from '../../components/navbar.js';
import {
  listenSearch,
  listenShowCategories,
  listenShowFilters,
} from './homelisteners.js';

function render() {
  return `
        ${Navbar()}
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
    },
  };
}

export default HomePage;
