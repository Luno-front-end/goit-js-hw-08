import galeryHistory from "./data/galeryArray.js";

const refs = {
  galeryList: document.querySelector(".js-gallery"),
  openModalContainer: document.querySelector(".js-lightbox"),
  imgOpenModal: document.querySelector(".lightbox__image"),
  closeBtn: document.querySelector("[data-action = close-lightbox]"),
  overlay: document.querySelector(".lightbox__overlay"),
};

refs.galeryList.addEventListener("click", onOpenModal);
refs.closeBtn.addEventListener("click", onCloseModalBtn);

const bulkheadGalleryArray = galeryHistory.map(
  ({ preview, original, description }) => {
    const listGallery = document.createElement("li");
    const listLinkGallery = document.createElement("a");
    const listImgGallery = document.createElement("img");

    listGallery.classList.add("gallery__item");
    listLinkGallery.classList.add("gallery__link");
    listImgGallery.classList.add("gallery__image");
    listImgGallery.id = "index-currentImg";
    listLinkGallery.href = original;

    listImgGallery.src = preview;
    listImgGallery.dataset.source = original;
    listImgGallery.alt = description;

    listGallery.append(listLinkGallery);
    listLinkGallery.append(listImgGallery);
    refs.galeryList.append(listGallery);
  }
);

const images = document.querySelectorAll("#index-currentImg");

function onOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  SubstitutionValuesOpenModal(e);
}

function SubstitutionValuesOpenModal(e) {
  window.addEventListener("keydown", onEscKeyPress);

  refs.overlay.addEventListener("click", onCloseByOverlay);

  refs.openModalContainer.classList.add("is-open");

  refs.imgOpenModal.src = e.target.dataset.source;
  refs.imgOpenModal.alt = e.target.alt;
  setActiveImage(index);

  // console.log(e.target);
}

function onCloseModalBtn() {
  window.removeEventListener("keydown", onEscKeyPress);

  refs.overlay.removeEventListener("click", onCloseByOverlay);

  refs.openModalContainer.classList.remove("is-open");
  refs.imgOpenModal.src = "";
  refs.imgOpenModal.alt = "";
}

function onEscKeyPress(e) {
  if (e.code === "Escape") {
    onCloseModalBtn();
  }
}

function onCloseByOverlay(e) {
  if (e.target === refs.overlay) {
    onCloseModalBtn();
  }
}

let index = 0;

window.addEventListener("keydown", onKeyPrevImg);

window.addEventListener("keydown", onNextKeyImg);

function onKeyPrevImg(e) {
  if (e.code === "ArrowLeft") {
    indexPrev();
  }
}

function onNextKeyImg(e) {
  if (e.code === "ArrowRight") {
    indexNext();
  }
}

function indexPrev() {
  if (index - 1 < 0) {
    return;
  }
  index -= 1;
  setActiveImage(index);
}

function indexNext() {
  if (index + 1 >= images.length) {
    return;
  }
  index += 1;
  setActiveImage(index);
}

function setActiveImage(imageIdx) {
  const activeImage = images[imageIdx];
  refs.imgOpenModal.src = activeImage.dataset.source;
  refs.imgOpenModal.alt = activeImage.alt;

  // console.log();
}
// ArrowRight;
// ArrowLeft;
