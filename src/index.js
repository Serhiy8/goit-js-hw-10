import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader-new'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(breeds => {
    const markupOption = breeds
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join('');
    refs.select.innerHTML = markupOption;

    refs.select.setAttribute('id', 'single');
    new SlimSelect({
      select: '#single',
    });
  })
  .catch(error => {
    loaderHidden();
    console.error(error);
    throw new Error(
      Notiflix.Report.failure(
        'Error',
        'Oops! Something went wrong! Try reloading the page!',
        'OK'
      )
    );
  });

refs.select.addEventListener('change', catSelected);

function catSelected(evt) {
  clearCatInfo();
  showLoader();
  const breedId = evt.target.value;
  fetchCatByBreed(breedId)
    .then(breed => {
      loaderHidden();
      refs.catInfo.innerHTML = `
        <img src="${breed[0].url}" width=300>
        <div class="cat-container"><h2>${breed[0].breeds[0].name}</h2>
             <p><b>Description:</b> ${breed[0].breeds[0].description}</p>
             <p><b>Temperament:</b> ${breed[0].breeds[0].temperament}</p>
        </div>
    `;
    })
    .catch(error => {
      console.log(error);
      loaderHidden();
      clearCatInfo();
      throw new Error(
        Notiflix.Report.failure(
          'Error',
          'Oops! Something went wrong! Try reloading the page!',
          'OK'
        )
      );
    });
}

function loaderHidden() {
  refs.loader.style.display = 'none';
}

function showLoader() {
  refs.loader.style.display = 'block';
}

function clearCatInfo() {
  refs.catInfo.innerHTML = '';
}
