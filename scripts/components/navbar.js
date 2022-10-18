import { Search } from './search.js';

function render() {
  return `
  <nav class="navbar">
  This is the navbar
  ${Search()}
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

function Navbar() {
  return {
    toString() {
      return render();
    },
    addListeners() {
      listenSearch();
    },
  };
}

export default Navbar;
