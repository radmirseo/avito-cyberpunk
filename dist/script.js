const copyButton = document.getElementById('copy-phone');
const status = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('+79600666226');
    status.textContent = 'Номер скопирован';
  } catch {
    status.textContent = 'Номер для копирования: +79600666226';
  }
});
