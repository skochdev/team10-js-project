import getRefs from './get-refs';

const REFS = getRefs();

REFS.studentsModal.addEventListener('click', onFooterModalOpen);
REFS.footerModalBackdrop.addEventListener('keydown', onEscape);

function onFooterModalOpen() {
  REFS.footerModalBackdrop.addEventListener('click', onFooterModalBackdropClick);
  REFS.footerCloseBtnRef.addEventListener('click', onFooterModalClose);
  window.addEventListener('keydown', onEscape);
  REFS.footerModalBackdrop.classList.remove('is-hidden');
  setBodyOverflow('hidden');
  REFS.goTopBtn.classList.remove('show');
}

function onFooterModalClose() {
  REFS.footerModalBackdrop.removeEventListener('click', onFooterModalBackdropClick);
  window.removeEventListener('keydown', onEscape);
  REFS.footerCloseBtnRef.removeEventListener('click', onFooterModalClose);
  REFS.footerModalBackdrop.classList.add('is-hidden');
  setBodyOverflow('auto');
  if (window.pageYOffset > document.documentElement.clientHeight) {
    REFS.goTopBtn.classList.add('show');
  }
}

// Закрываем мобильное меню на более широких экранах
// в случае изменения ориентации устройства.
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  REFS.footerModalBackdrop.classList.add('is-hidden');
  onFooterModalClose();
});

function onFooterModalBackdropClick(e) {
  if (e.target === e.currentTarget || e.code === 'Escape') {
    onFooterModalClose();
  }
}

function setBodyOverflow(value) {
  document.body.style.overflow = value;
}

function onEscape(e) {
  if (e.code === 'Escape') {
    onFooterModalClose();
  }

  return;
}
