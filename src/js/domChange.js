import SlimSelect from 'slim-select';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader-new'),
  catInfo: document.querySelector('.cat-info'),
};

loaderHidden = () => {
  refs.loader.style.display = 'none';
};

showLoader = () => {
  refs.loader.style.display = 'block';
};

clearCatInfo = () => {
  refs.catInfo.innerHTML = '';
};

createSlimSelect = () => {
  refs.select.setAttribute('id', 'single');
  new SlimSelect({
    select: '#single',
  });
};

export { loaderHidden, showLoader, clearCatInfo, createSlimSelect };
