// import { categories } from '../data.js';
import { getCategories } from '../services/categories.js';

async function renderCategories() {
  const categories = await getCategories();
  const categoriesArr = categories.reduce(
    (categoriesArr, category) =>
      (categoriesArr += `
    <div key=${category.id} class="categories-options--item">
    <input type="checkbox" name="category" value="${category.name}" id=${category.id} class="category-input">
    <label for=${category.id}>${category.name}</label>
    </div>`),
    ''
  );
  const categoriesContainer = document.querySelector('#js-categories-list');
  categoriesContainer.innerHTML = categoriesArr;
}

export function Categories() {
  renderCategories();
  return `
          <div class="categories-container">
          <button id="js-show-categories" class="options-button">
          Categories
          <img src="../../assets/images/angle-down.svg" alt="Search">
          </button>
          <form id="js-categories" class="display_none categories-options">
             <div id="js-categories-list">
             </div>
              <button type="submit" class="options-container--button">Done</button>
          </form>
          </div>
      `;
}
