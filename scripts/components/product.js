export function Product(product) {
  return `
    <div class="product-container" key=${product.id}>
    <div class="product-container--image-info">
    <img src="${product.url_image}">
    ${
      product.discount != 0
        ? `<p id="product-container--info">${product.discount}% off</p>`
        : ''
    }
    </div>
    <div class="product-container--price-name">
    <p id="name">${product.name}</p>
    <p id="price">$${product.price}</p>
    </div>
    </div>
    `;
}
