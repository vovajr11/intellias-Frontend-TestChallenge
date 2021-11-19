import galleryListItem from '../data/gallery-item.js';

const refs = {
  galleryContainer: document.querySelector('.gallery-list-js'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
  btnCLoseModal: document.querySelector('[data-action="close-lightbox"]'),
  imgModal: document.querySelector('.lightbox__image'),
};

const makeGalleryListMarkup = imageItem => {
  const { preview, original, description } = imageItem;

  return `
    <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
    <p class="name">${description}</p>
  </li> 
    `;
};

const galleryListMarkup = galleryListItem.map(makeGalleryListMarkup).join('');
refs.galleryContainer.innerHTML += galleryListMarkup;

refs.galleryContainer.addEventListener('click', onOpenGalleryClick);
refs.btnCLoseModal.addEventListener('click', onCloseGalleryModal);
refs.lightboxOverlay.addEventListener('click', onBackdropClick);

function onOpenGalleryClick(evt) {
  window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('keydown', onRightGallery);
  window.addEventListener('keydown', onLeftGallery);

  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const target = evt.target;
  const getUrlBigImg = target.dataset.source;

  refs.lightbox.classList.add('is-open');
  refs.imgModal.src = getUrlBigImg;
  refs.imgModal.alt = evt.target.alt;

  onRightGallery();
  onLeftGallery();
}

function onCloseGalleryModal() {
  window.removeEventListener('keydown', onEscKeyPress);

  refs.lightbox.classList.remove('is-open');
  refs.imgModal.src = '';
  refs.imgModal.alt = '';
}

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseGalleryModal();
  }
}

function onEscKeyPress(evt) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = evt.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseGalleryModal();
  }
}
