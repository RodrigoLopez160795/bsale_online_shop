import { BASE_URI } from '../config.js';

export async function getProducts() {
  const response = await fetch(`${BASE_URI}/products`);
  return await response.json();
}
