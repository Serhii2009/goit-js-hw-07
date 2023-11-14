import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', galleryList(galleryItems));
container.addEventListener('click', handleClick);

let gallery;

function galleryList(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}">
      </a>
    </li>
    `
    )
    .join('');
}

function handleClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return gallery.next();
  }

  if (!gallery) {
    gallery = new SimpleLightbox('.gallery__item a', {
      captionsData: 'alt',
      captionDelay: 250,
      overlayOpacity: 0.5,
    });

    gallery.on('show.simplelightbox', function () {
      const currentImage = gallery.currentImage;
      const currentIndex = galleryItems.findIndex(
        item => item.original === currentImage.src
      );
      const { original, description } = galleryItems[currentIndex];
      const imageHtml = `<img class="gallery__image" src="${original}" alt="${description}">`;
      document.querySelector('.sl-image').innerHTML = imageHtml;
    });
  }
}
