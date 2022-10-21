import { Product } from './product.js';

export function ProductsList(products, notFound) {
  if (products.length > 0) {
    return `
        <div>
            <p id="products-count">${products.length} products found</p>
            <div class="products-list">
            ${products.reduce(
              (productArr, product) => (productArr += Product(product)),
              ''
            )}
              </div>
        </div>
        `;
  } else if (!notFound) {
    return `<p id="ready">Ready to search</p>`;
  } else if (notFound) {
    return `<p id="ready">Not found</p>`;
  }
}
