//Описаний у документації
import iziToast from "izitoast";


// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


import { createGalleryCard,
        showMessage,
        showLoader,
        hideLoader,
 } from "./js/render-functions";

import { fetchPhotos } from "./js/pixabay-api";


const searchForm = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const queryInput = document.querySelector('.js-search-input');

let lightbox;

iziToast.settings({
        messageColor: 'white',
        position: "bottomRight",
        backgroundColor: '#ef4040',
      });

const onSearchFormSubmit = event => {
    event.preventDefault();

    const searchedValue = searchForm.elements.user_search.value.trim();// from attribute 'name' in input read the value of user
   
    if (searchedValue === '') {
        showMessage('Please enter a search query.');
        return;
      }

    showLoader();
    
    fetchPhotos(searchedValue).then(data => {// тут відбувається обробка даних
        

        const galleryCards = data.hits.map(imgDetails => createGalleryCard(imgDetails)).join('');
        galleryEl.innerHTML = galleryCards;

        if (data.hits.length === 0) {
                showMessage ('Sorry, there are no images matching your search query. Please try again!',
                );
                
                galleryEl.innerHTML = ''; //clear galllery if query is incorrect
                searchForm.reset(); // clear input
                return;
        }
        if (!lightbox) {
                lightbox = new SimpleLightbox('.js-gallery a', {
                  captionsData: 'alt',
                  captionPosition: 'bottom',
                  captionDelay: 250,
                });
              } else {
                lightbox.refresh();
              }
        }).catch(err => {if (err.message === '404') {
                showMessage('Your request was not found');
        }
        }).finally(() => {
                hideLoader();
                searchForm.reset();
              });
};

searchForm.addEventListener('submit', onSearchFormSubmit);