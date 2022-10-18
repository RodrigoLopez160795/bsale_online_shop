import { Filters } from './filters.js';
import { Search } from './search.js';

function render() {
  return `
  <nav class="navbar">
  This is the navbar
  ${Search()}
  ${Filters()}
  </nav>
`;
}

function listenSearch() {
  const query = document.querySelector('#js-search');
  query.addEventListener('submit', (e) => {
    e.preventDefault();
    const [search] = e.target.elements;
    console.log(search.value);
    search.value = '';
  });
}

function listenShowFilters() {
  const show = document.querySelector('#js-show-filters');
  const filter = document.querySelector('#js-filters');
  show.addEventListener('click', () => {
    filter.classList.toggle('display_none');
  });
}

function Navbar() {
  return {
    toString() {
      return render();
    },
    addListeners() {
      listenSearch();
      listenShowFilters();
    },
  };
}

export default Navbar;
