import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

const markupGallery = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
  ""
);

galleryBox.insertAdjacentHTML("beforeend", markupGallery);
console.log(galleryBox);

galleryBox.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  const urlGallery = event.target.dataset.source;
  if (!urlGallery) return;
  console.log(urlGallery);
  const instance = basicLightbox.create(`
      <img src="${urlGallery}" width="800" height="600">
  `);
  instance.show();

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
