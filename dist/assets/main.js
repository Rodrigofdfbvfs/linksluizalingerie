const year = document.querySelector('[data-year]');
const shareButton = document.querySelector('[data-share]');
const toast = document.querySelector('[data-toast]');

if (year) year.textContent = new Date().getFullYear();

const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
};

shareButton?.addEventListener('click', async () => {
  const shareData = {
    title: 'Luiza Gabrielly',
    text: 'Vestir bem, para vestir sempre.',
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    showToast('Link copiado');
  } catch (error) {
    if (error?.name !== 'AbortError') showToast('Não foi possível compartilhar');
  }
});
