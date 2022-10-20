export function listenSearch() {
  const query = document.querySelector('#js-search');
  query.addEventListener('submit', (e) => {
    e.preventDefault();
    const [search] = e.target.elements;
    console.log(search.value);
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
    if (categoriesFilters.length > 0) console.log(categoriesFilters);
    categoriesFilters = [];
  });
}
