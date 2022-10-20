import { categories } from '../data.js';

export function Categories() {
  return `
          <div class="categories-container">
          <button id="js-show-categories" class="options-button">
          Categories
          <img src="../../assets/images/angle-down.svg" alt="Search">
          </button>
          <form id="js-categories" class="display_none categories-options">
              ${categories.reduce(
                (categoriesArr, category) =>
                  (categoriesArr += `
                <div key=${category.id} class="categories-options--item">
                <input type="checkbox" name="category" value="${category.name}">
                <label>${category.name}</label>
                </div>`),
                ''
              )}
              <button type="submit" class="options-container--button">Done</button>
          </form>
          </div>
      `;
}
