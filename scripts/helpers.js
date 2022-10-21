import { root } from './config.js';
import DOMHandler from './dom-handler.js';
import HomePage from './pages/Home/home.js';
import { getCategories } from './services/categories.js';

export function filterProductsByCategory(products, filters) {
  let categories = [];
  let categoriesFiltered = [];
  let productsFiltered = [];
  getCategories().then((data) => {
    data.forEach((e) => categories.push(e));
    categories.forEach((category) => {
      filters.forEach((filter) => {
        if (filter === category.name) categoriesFiltered.push(category.id);
      });
    });
    products.forEach((product) => {
      categoriesFiltered.forEach((category) => {
        if (category === product.category) productsFiltered.push(product);
      });
    });
    DOMHandler.load(HomePage(productsFiltered), root);
    categories = [];
    categoriesFiltered = [];
    productsFiltered = [];
  });
}

export function filterProductsByPriceAndDiscount(products, min, max, discount) {
  let productsFiltered = [];
  if (min === '' && max === '') {
    products.forEach((product) => {
      if (product.discount > 0) productsFiltered.push(product);
    });
    DOMHandler.load(HomePage(productsFiltered), root);
    return;
  }
  if (min === '' && max != '') {
    if (discount) {
      products.forEach((product) => {
        if (product.price <= max && product.discount > 0)
          productsFiltered.push(product);
      });
      DOMHandler.load(HomePage(productsFiltered), root);
      return;
    } else {
      products.forEach((product) => {
        if (product.price <= max) productsFiltered.push(product);
        DOMHandler.load(HomePage(productsFiltered), root);
        return;
      });
    }
  }
  if (min != '' && max === '') {
    if (discount) {
      products.forEach((product) => {
        if (product.price >= min && product.discount > 0)
          productsFiltered.push(product);
        DOMHandler.load(HomePage(productsFiltered), root);
        return;
      });
    } else {
      products.forEach((product) => {
        if (product.price >= min) productsFiltered.push(product);
        DOMHandler.load(HomePage(productsFiltered), root);
        return;
      });
    }
  }
}
