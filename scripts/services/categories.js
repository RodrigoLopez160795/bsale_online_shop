import { BASE_URI } from '../config.js';

export async function getCategories() {
  const response = await fetch(`${BASE_URI}/categories`);
  return await response.json();
}
