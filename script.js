const year = document.getElementById('year');
year.textContent = String(new Date().getFullYear());

const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');

if (window.isSecureContext && navigator.clipboard?.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('roi.for.work@gmail.com');
      copyStatus.textContent = 'Email address copied.';
    } catch {
      copyStatus.textContent = 'Please select and copy the email address.';
    }
  });
}
