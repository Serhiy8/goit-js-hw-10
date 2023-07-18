import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY =
  'live_9g5UPCmeuCu52eJbf1zI7052rNo1lb5yQdXChTvsRz9jcJomAU3hQ2zX6TOgAiel';

axios.defaults.headers.common['x-api-key'] = API_KEY;

fetchBreeds = () => {
  const URL_BREEDS = 'https://api.thecatapi.com/v1/breeds';

  return axios
    .get(URL_BREEDS)
    .then(response => response.data)
    .catch(error => {
      console.error(error.message);

      Notiflix.Report.failure(
        'Error',
        'Oops! Something went wrong! Try reloading the page!',
        'OK'
      );
    });
};

fetchCatByBreed = breedId => {
  const URL_BREED_ID = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return axios
    .get(URL_BREED_ID)
    .then(response => response.data)
    .catch(error => {
      console.error(error.message);

      Notiflix.Report.failure(
        'Error',
        'Oops! Something went wrong! Try reloading the page!',
        'OK'
      );
    });
};

export { fetchBreeds, fetchCatByBreed };
