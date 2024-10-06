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
const loadMoreBtn = document.querySelector('.js-load-more');

let currentPage = 1;
let searchedValue = '';
let totalHits = 0;

let lightbox = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

iziToast.settings({
        messageColor: 'white',
        position: "bottomRight",
        backgroundColor: '#ef4040',
      });

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchedValue = searchForm.elements.user_search.value.trim();// from attribute 'name' in input read the value of user
   
    currentPage = 1;

    if (searchedValue === '') {
        showMessage('Please enter a search query.');
        return;
      } 

    showLoader();

    let response = await fetchPhotos(searchedValue, currentPage);
   
    if (response.data.hits.length === 0) {
              showMessage ('Sorry, there are no images matching your search query. Please try again!',
              );
              
              galleryEl.innerHTML = ''; //clear gallery if query is incorrect
              searchForm.reset(); // clear input
              loadMoreBtn.classList.add('is-hidden');
              return;
      }
           
            
      const galleryCards = response.data.hits.map(imgDetails => createGalleryCard(imgDetails)).join('');
      galleryEl.innerHTML = galleryCards;

      loadMoreBtn.classList.remove('is-hidden');

      lightbox.refresh();
  }
  catch (err) {if (err.message === '404') {
                    showMessage('Your request was not found');
            }
            }
  finally {
                    hideLoader();
                    searchForm.reset();
                  };
};

const onLoadMoreBtn = async (event) => {
  try {
    currentPage++;
    
    loadMoreBtn.classList.add('is-hidden');
    showLoader();

    const response = await fetchPhotos(searchedValue, currentPage);
    

    const galleryCards = response.data.hits.map(imgDetails => createGalleryCard(imgDetails)).join('');
      galleryEl.insertAdjacentHTML('beforeend', galleryCards);

      totalHits = response.data.totalHits;
      createGalleryCard(response.data.hits);
      lightbox.refresh();
      
    const galleryItem = document
      .querySelector('.gallery-card')
      .getBoundingClientRect();

    const cardSize = galleryItem.height;
    window.scrollBy({
      top: cardSize * 2,
      left: 0,
      behavior: 'smooth',
    });

      if (galleryEl.children.length >= totalHits) {
        loadMoreBtn.classList.add('is-hidden');
        showMessage("We're sorry, but you've reached the end of search results.");
      } else {
      loadMoreBtn.classList.remove('is-hidden');
      }

  }
  catch (err) {
    if (err.message === '404') {
                    showMessage('Your request was not found');
            }
            }
  finally {
    hideLoader();
    searchForm.reset();
  };
}

searchForm.addEventListener('submit', onSearchFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtn);