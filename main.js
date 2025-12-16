/*
  LOADER
  - shows the loader overlay for 5 seconds
  - then starts the slide-down + fade-out animation (CSS: .loader.hide)
  - page content fades in (CSS: .page-content.show)
  - scroll is restored (CSS: body.loaded)
  - once the animation finishes, the loader is removed so it can’t block clicks
*/

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const pageContent = document.getElementById("page-content");

  if (!loader || !pageContent) return;

  setTimeout(() => {
    loader.classList.add("hide");
    pageContent.classList.add("show");
    document.body.classList.add("loaded");
  }, 5000);

  loader.addEventListener("animationend", () => {
    loader.style.display = "none";
  });
});
