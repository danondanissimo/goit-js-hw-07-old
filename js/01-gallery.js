import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);




const picsContainer = document.querySelector(".gallery");
const picSetMarkup = createGalleryMarkup(galleryItems);

picsContainer.insertAdjacentHTML("beforeend", picSetMarkup);

picsContainer.addEventListener("click", onPicsContainerClick);

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

let modalWindow;
let onCliskClose;
  function onPicsContainerClick (event){
    event.preventDefault();

if(!event.target.classList.contains('gallery__image')){
    return;
}
modalWindow = basicLightbox.create(
  ` <img src="${event.target.dataset.source}"/>`
);
      modalWindow.show(onCliskClose);

      window.addEventListener('keydown', onEscapeClose);

  }

  function onEscapeClose (event){
    modalWindow.close();
  }

