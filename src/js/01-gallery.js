// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallerryRef = document.querySelector('.gallery');

gallerryRef.innerHTML = setMarkupGallery(galleryItems);


function setMarkupGallery(galleryObjects) {
    return galleryObjects.map(markupItem).join('');
}

function markupItem({ preview, original, description }) {
    const markup = `
        <div>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </div>
        `;
    
    return markup;
}

const options = {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
};
const gallery = new SimpleLightbox('.gallery a', options);
