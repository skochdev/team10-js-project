import getRefs from './get-refs';

const REFS = getRefs();

REFS.studentsModal.addEventListener('click', onFooterModalOpen);
REFS.footerModalBackdrop.addEventListener('keydown', onEscape);

function onFooterModalOpen() {
  REFS.footerModalBackdrop.addEventListener('click', onFooterModalBackdropClick);
  REFS.footerCloseBtnRef.addEventListener('click', onFooterModalClose);
  window.addEventListener('keydown', onEscape);
  REFS.footerModalBackdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function onFooterModalClose() {
  REFS.footerModalBackdrop.removeEventListener('click', onFooterModalBackdropClick);
  window.removeEventListener('keydown', onEscape);
  REFS.footerCloseBtnRef.removeEventListener('click', onFooterModalClose);
  REFS.footerModalBackdrop.classList.add('is-hidden');
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
