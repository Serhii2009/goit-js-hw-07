import { galleryItems } from './gallery-items.js';
// import 'basiclightbox/dist/basicLightbox.min.css';
// import * as basicLightbox from 'basiclightbox';

// 1. Створення і рендер розмітки
const galleryContainer = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
          </li>`;
};

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryContainer.innerHTML = galleryMarkup;

// 2. Реалізація делегування
galleryContainer.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageURL = event.target.closest('.gallery__link').href;

  // 3. Підключення basicLightbox і відкриття модального вікна
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
  `);

  instance.show();
});
