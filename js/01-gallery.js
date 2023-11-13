import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
                </a>
              </li>`;
};

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const { nodeName, dataset } = event.target;

  if (nodeName !== 'IMG') {
    return;
  }

  const largeImageURL = dataset.source;

  const instance = basicLightbox.create(`
        <img src="${largeImageURL}" width="800" height="600">
      `);

  // Додав стилі для центрування модального вікна
  instance.element().style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;

  instance.element().addEventListener('click', () => {
    instance.close();
  });

  instance.show();
}
