const refs = {
  footerModalBackdrop: document.querySelector('[data-footerModalBackdrop]'),
  studentsModal: document.querySelector('[data-studentsModal]'),
};

refs.studentsModal.addEventListener('click', onFooterModalOpen);

function onFooterModalOpen() {
  refs.footerModalBackdrop.addEventListener('click', onFooterModalBackdropClick);
  refs.footerModalBackdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function onFooterModalClose() {
  refs.footerModalBackdrop.removeEventListener('click', onFooterModalBackdropClick);
  refs.footerModalBackdrop.classList.add('is-hidden');
  document.body.style.overflow = 'auto';
}

function onFooterModalBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onFooterModalClose();
  }
}
