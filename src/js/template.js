export const createCatInfo = breed => {
  const template = `<img src="${breed[0].url}"/>
    <div class="cat-container">
      <h2>${breed[0].breeds[0].name}</h2>
      <p><b>Description:</b> ${breed[0].breeds[0].description}</p>
      <p><b>Temperament:</b> ${breed[0].breeds[0].temperament}</p>
    </div>`;
  return template;
};
