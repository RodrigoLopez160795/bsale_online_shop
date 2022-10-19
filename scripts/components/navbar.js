import { Categories } from './categories.js';
import { Filters } from './filters.js';
import { Search } from './search.js';

export function Navbar() {
  return `
  <nav class="navbar">
  This is the navbar
  ${Categories()}
  ${Search()}
  ${Filters()}
  </nav>
`;
}
