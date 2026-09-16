const imageDialog = document.querySelector('.image-dialog');
const imageLink = document.querySelector('[data-lightbox]');
if (imageDialog && imageLink && typeof imageDialog.showModal === 'function') {
  imageLink.addEventListener('click', (event) => {
    // Preserve open-in-new-tab and other native link gestures.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    imageDialog.showModal();
  });
  imageDialog.querySelector('.close-dialog').addEventListener('click', () => imageDialog.close());
  imageDialog.addEventListener('click', (event) => {
    if (event.target !== imageDialog) return;
    const box = imageDialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) imageDialog.close();
  });
  imageDialog.addEventListener('close', () => imageLink.focus({ preventScroll: true }));
}
