window.onload = function loadFn() {
  const toggleBtn = document.querySelector(".toggle-btn");
  const collapseMenu = document.querySelector(".collapse");

  toggleBtn.addEventListener("click", function (e) {
    collapseMenu.classList.toggle("active");
  });

  // Masonry
  const grid = document.querySelector(".images-flex");
  const masonry = new Masonry(grid, {
    itemSelector: ".flex-item",
    gutter: 60,
    columnWidth: ".flex-item",

    // fitWidth: true,
  });
};

// rellax js
const rellax = new Rellax(".rellax", {
  center: true,
});
