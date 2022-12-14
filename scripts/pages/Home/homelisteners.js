import { root } from '../../config.js';
import DOMHandler from '../../dom-handler.js';
import {
  filterProductsByCategory,
  filterProductsByPriceAndDiscount,
} from '../../helpers.js';
import { getProducts } from '../../services/products.js';
import { searchProduct } from '../../services/search.js';
import HomePage from './home.js';

export function listenSearch() {
  const query = document.querySelector('#js-search');
  query.addEventListener('submit', (e) => {
    e.preventDefault();
    const [search] = e.target.elements;
    searchProduct(search.value).then((data) => {
      if (data.length > 0) DOMHandler.load(HomePage(data), root);
      else DOMHandler.load(HomePage([], true), root);
    });
    search.value = '';
  });
}

export function listenShowFilters() {
  const show = document.querySelector('#js-show-filters');
  const filter = document.querySelector('#js-filters');
  show.addEventListener('click', () => {
    filter.classList.toggle('display_none');
  });
}

export function listenShowCategories() {
  const show = document.querySelector('#js-show-categories');
  const category = document.querySelector('#js-categories');
  show.addEventListener('click', () => {
    category.classList.toggle('display_none');
  });
}

export function listenCategories() {
  let categoriesFilters = [];
  const categories = document.querySelector('#js-categories');
  categories.addEventListener('submit', (e) => {
    e.preventDefault();
    const [...values] = e.target.elements;
    values.forEach((value) => {
      if (value.checked === true) categoriesFilters.push(value.value);
      value.checked = false;
    });
    categories.classList.toggle('display_none');
    if (categoriesFilters.length > 0) {
      getProducts().then((data) => {
        filterProductsByCategory(data, categoriesFilters);
        categoriesFilters = [];
      });
    }
  });
}

export function listenFilters() {
  const filters = document.querySelector('#js-filters');
  filters.addEventListener('submit', (e) => {
    e.preventDefault();
    const [min, max, discount, ...rest] = e.target.elements;
    if (min.value != '' || max.value != '' || discount.checked != false) {
      getProducts().then((data) => {
        filterProductsByPriceAndDiscount(
          data,
          min.value,
          max.value,
          discount.checked
        );
        min.value = '';
        max.value = '';
        discount.checked = false;
      });
    }
    filters.classList.toggle('display_none');
  });
}
