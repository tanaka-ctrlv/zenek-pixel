window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const pageContent = document.getElementById('page-content');

  // WAIT 5 SECONDS BEFORE HIDING LOADER
  setTimeout(() => {
    loader.classList.add('hide');       // triggers slide + fade animation
    pageContent.classList.add('show');  // fades content in
    document.body.classList.add('loaded');
  }, 5000); // <— 5 seconds

  // Remove loader after animation is finished
  loader.addEventListener('animationend', () => {
    loader.style.display = 'none';
  });
});
