import { BASE_URI } from '../config.js';

export async function searchProduct(query) {
  const response = await fetch(`${BASE_URI}/searchProduct/${query}`);
  return await response.json();
}
