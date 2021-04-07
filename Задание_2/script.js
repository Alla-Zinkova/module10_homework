const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
  const height= window.innerHeight;
  const width= window.innerWidth;
  alert(`Высота экрана: ${height}. Ширина экрана: ${width}`);
});
