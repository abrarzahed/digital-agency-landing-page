window.onload = function loadFn() {
  const toggleBtn = document.querySelector(".toggle-btn");
  const collapseMenu = document.querySelector(".collapse");

  toggleBtn.addEventListener("click", function (e) {
    collapseMenu.classList.toggle("active");
  });
};
