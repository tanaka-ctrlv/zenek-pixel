/*
  LOADER:
  - keep loader on screen for 5 seconds
  - slide it down smoothly + fade
  - then show the page content
  - ai ref: how to listen for animation end so loader is actually removed to prevent invisible overlay bug
*/

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const pageContent = document.getElementById("page-content");

  
  if (!loader || !pageContent) return;

  /* WAIT 5 SECONDS BEFORE HIDING LOADER
  */
  setTimeout(() => {
    loader.classList.add("hide");       /* triggers slide + fade animation
    */
    pageContent.classList.add("show");  /* fades content in
    */
    document.body.classList.add("loaded"); /*restores scroll
    */
  }, 5000);

  /*Remove loader after animation is finished*/
  loader.addEventListener("animationend", () => {
    loader.style.display = "none";
  });
});
