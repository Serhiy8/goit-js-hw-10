import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';
import { createCatInfo } from './js/template.js';
import {
  loaderHidden,
  showLoader,
  clearCatInfo,
  createSlimSelect,
} from './js/domChange.js';

const refs = {
  select: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
};

refs.select.addEventListener('change', catSelected);

fetchBreeds()
  .then(breeds => {
    const markupOption = breeds
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join('');
    refs.select.innerHTML = markupOption;
    createSlimSelect();
  })
  .catch(() => {
    loaderHidden();
  });

function catSelected(evt) {
  clearCatInfo();
  showLoader();
  const breedId = evt.target.value;
  fetchCatByBreed(breedId)
    .then(breed => {
      loaderHidden();
      refs.catInfo.innerHTML = createCatInfo(breed);
    })
    .catch(() => {
      loaderHidden();
    });
}
