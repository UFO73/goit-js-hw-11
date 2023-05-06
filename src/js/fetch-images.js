import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '36013833-a2f574324f71555dbe50bfe3a';

async function fetchImages(query, page, perPage) {
  const url = `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
  const response = await axios.get(url);
  return response;
}

export { fetchImages };