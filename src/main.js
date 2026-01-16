import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();
  const inputResult = evt.target.elements['search-text'].value.trim();
  if (!inputResult) {
    iziToast.warning({
      title: 'Caution',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(inputResult).then(data => {
    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
})
.catch(error => {
        iziToast.error({
          title: 'Error',
          message: `Something went wrong: ${error.message}`,
          position: 'topRight',
        });
      })
      .finally(() => {
        hideLoader();
        formEl.reset();
      
  });
}
