const element = document.querySelector(".hero-btn");

element.addEventListener("click", () => {
  element.classList.add("animate__rubberBand");
  setTimeout(() => {
    element.classList.remove("animate__rubberBand");
  }, 1000);
});
