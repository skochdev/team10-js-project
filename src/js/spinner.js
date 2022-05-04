export function renderSnpinner(parentElement) {
  const spinnerMarkup = `
  <div class="animated-spinner">
    <div></div>
    <div></div>
  </div>
`;

  parentElement.insertAdjacentHTML('afterbegin', spinnerMarkup);
}
