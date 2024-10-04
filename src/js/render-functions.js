import iziToast from 'izitoast';

export const createGalleryCard = (imgInfo) => {
    return `
    <li class="gallery-card">
        <a
          class="gallery-link"
          href="${imgInfo.largeImageURL}"
        >
          <img
            class="gallery-img"
            src="${imgInfo.webformatURL}"
            alt="${imgInfo.tags}"
            width=360
  //        onclick="return false"
            data-source="${imgInfo.largeImageURL}"
          />
          <ul class="description">
            <li>
              <p>Likes</p>
              <p class="description-value">${imgInfo.likes}</p>
            </li>
            <li>
              <p>Views</p>
              <p class="description-value">${imgInfo.views}</p>
            </li>
            <li>
              <p>Comments</p>
              <p class="description-value">${imgInfo.comments}</p>
            </li>
            <li>
              <p>Downloads</p>
              <p class="description-value">${imgInfo.downloads}</p>
            </li>
          </ul>
        </a>
      </li>
    `;
};

export function showMessage(message) {
    iziToast.show({
      message: message,
    });
  }
  
  export function showLoader() {
    const loader = document.querySelector('.js-loader');
    loader.classList.remove('is-hidden');
  }
  
  export function hideLoader() {
    const loader = document.querySelector('.js-loader');
    loader.classList.add('is-hidden');
  }

