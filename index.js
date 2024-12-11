document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('element1');
  setTimeout(() => {
    element.classList.remove('greeting-text');
    element.classList.add('greeting-text_visible');
  }, 3000);
});
