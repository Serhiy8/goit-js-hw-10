import SlimSelect from 'slim-select';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader-new'),
  catInfo: document.querySelector('.cat-info'),
};

function loaderHidden() {
  refs.loader.style.display = 'none';
}

function showLoader() {
  refs.loader.style.display = 'block';
}

function clearCatInfo() {
  refs.catInfo.innerHTML = '';
}

function createSlimSelect() {
  refs.select.setAttribute('id', 'single');
  new SlimSelect({
    select: '#single',
  });
}

export { loaderHidden, showLoader, clearCatInfo, createSlimSelect };
