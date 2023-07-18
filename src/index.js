import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';
import { createCatInfo } from './js/template.js';
import {
  loaderHidden,
  showLoader,
  clearCatInfo,
  createSlimSelect,
} from './js/domChange.js';

const select = document.querySelector('.breed-select');

fetchBreeds()
  .then(breeds => {
    const markupOption = breeds
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join('');
    select.innerHTML = markupOption;
    createSlimSelect();
  })
  .catch(() => {
    loaderHidden();
  });

const catSelected = evt => {
  const catInfo = document.querySelector('.cat-info');
  clearCatInfo();
  showLoader();
  const breedId = evt.target.value;
  fetchCatByBreed(breedId)
    .then(breed => {
      loaderHidden();
      catInfo.innerHTML = createCatInfo(breed);
    })
    .catch(() => {
      loaderHidden();
    });
};

select.addEventListener('change', catSelected);
