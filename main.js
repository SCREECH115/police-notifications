const button = document.querySelector("button");
const toast = document.querySelector(".toast");
const close = document.querySelector(".close");
const progress = document.querySelector(".progress");

button.addEventListener("click", () => {
  toast.classList.add("active");
  progress.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 5000);

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);
});

close.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);
});
