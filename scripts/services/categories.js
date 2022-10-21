import { BASE_URI } from '../config.js';

export async function getCategories() {
  const response = await fetch(`${BASE_URI}/categories`);
  const categories = await response.json();
  return categories;
}
