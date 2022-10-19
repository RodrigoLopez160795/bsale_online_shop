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
