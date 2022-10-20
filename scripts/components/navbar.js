import { Categories } from './categories.js';
import { Filters } from './filters.js';
import { Search } from './search.js';

export function Navbar() {
  return `
  <nav class="navbar">
  <p class="logo">Bsale Test</p>
  ${Categories()}
  ${Search()}
  ${Filters()}
  </nav>
`;
}
