import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

const markupGallery = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    acc +
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`,
  ""
);

galleryBox.insertAdjacentHTML("beforeend", markupGallery);
console.log(galleryBox);

const addSimpleLightboxGallery = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: "250",
});
addSimpleLightboxGallery.on("show.simplelightbox");
