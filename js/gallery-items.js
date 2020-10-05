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
    listLinkGallery.href = original;

    listImgGallery.src = preview;
    listImgGallery.dataset.source = original;
    listImgGallery.alt = description;

    listGallery.append(listLinkGallery);
    listLinkGallery.append(listImgGallery);
    refs.galeryList.append(listGallery);
  }
);
function onOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  SubstitutionValuesOpenModal(e);
}

function SubstitutionValuesOpenModal(e) {
  onAddListenerKeyboardKay();
  onAddListenerKeyboardKayArrow();

  refs.overlay.addEventListener("click", onCloseByOverlay);

  refs.openModalContainer.classList.add("is-open");
  refs.imgOpenModal.src = e.target.dataset.source;
  refs.imgOpenModal.alt = e.target.alt;
  // console.log(e.target);
}
function lol(e) {
  console.log(e.currentTarget);
}

function onCloseModalBtn() {
  onRemoveListenerKeyboardKay();
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

function onArrowKayPress(e) {
  // const cur =
  // galeryHistory.map(({ original, description }) => {
  // console.log(preview, original, description);
  const ollGaleryListItem = refs.galeryList.querySelectorAll(".gallery__item");
  // const currentSlider = e.currentTarget.length;

  if (e.code === "ArrowRight") {
    // console.log(currentSlider);
    // console.log("v pravo");
    console.log(ollGaleryListItem);

    // console.log(indexOf(this));
  }
  // });
}

// function slider(e) {
// }

const onAddListenerKeyboardKay = () =>
  window.addEventListener("keydown", onEscKeyPress);

const onRemoveListenerKeyboardKay = () =>
  window.removeEventListener("keydown", onEscKeyPress);

const onAddListenerKeyboardKayArrow = () =>
  window.addEventListener("keydown", onArrowKayPress);

// ArrowRight;
// ArrowLeft;
