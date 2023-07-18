import SlimSelect from 'slim-select';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader-new'),
  catInfo: document.querySelector('.cat-info'),
};

const loaderHidden = () => {
  refs.loader.style.display = 'none';
};

const showLoader = () => {
  refs.loader.style.display = 'block';
};

const clearCatInfo = () => {
  refs.catInfo.innerHTML = '';
};

const createSlimSelect = () => {
  refs.select.setAttribute('id', 'single');
  new SlimSelect({
    select: '#single',
  });
};

export { loaderHidden, showLoader, clearCatInfo, createSlimSelect };
