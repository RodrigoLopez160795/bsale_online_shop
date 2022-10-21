import { Product } from './product.js';

export function ProductsList(products) {
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
  } else {
    return `<p>Ready to search</p>`;
  }
}
