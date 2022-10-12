import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const picsContainer = document.querySelector(".gallery");
const picSetMarkup = createGalleryMarkup(galleryItems);

picsContainer.insertAdjacentHTML("beforeend", picSetMarkup);


function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, descr }) => {
        return `
          <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${descr}"
              />
            </a>
          </div>
        `;
      })
      .join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt", captionDelay:250});

