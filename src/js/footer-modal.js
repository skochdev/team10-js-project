const refs = {
  footerModalBackdrop: document.querySelector('[data-footerModalBackdrop]'),
  studentsModal: document.querySelector('[data-studentsModal]'),
};

refs.studentsModal.addEventListener('click', onFooterModalOpen);
refs.footerModalBackdrop.addEventListener('keydown', onEscape);

function onFooterModalOpen() {
  refs.footerModalBackdrop.addEventListener('click', onFooterModalBackdropClick);
  window.addEventListener('keydown', onEscape);
  refs.footerModalBackdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function onFooterModalClose() {
  refs.footerModalBackdrop.removeEventListener('click', onFooterModalBackdropClick);
  window.removeEventListener('keydown', onEscape);
  refs.footerModalBackdrop.classList.add('is-hidden');
  document.body.style.overflow = 'auto';
}

function onFooterModalBackdropClick(e) {
  if (e.target === e.currentTarget || e.code === 'Escape') {
    onFooterModalClose();
  }
}

function onEscape(e) {
  if (e.code === 'Escape') {
    onFooterModalClose();
  }

  return;
}
