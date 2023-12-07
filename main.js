const menuBar = document.querySelector("#menu-bar");
const navLinks = document.querySelector(".nav");
const viewMoreBtn = document.querySelector("#viewMore-btn");
const loadMoreArticle = document.querySelectorAll(".load-more-article");

menuBar.addEventListener("click", openMenu);
viewMoreBtn.addEventListener("click", viewMoreArticle);

function openMenu() {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    menuBar.style.color = "#ffffff";
    navLinks.style.display = "flex";
  } else {
    menuBar.style.color = "";
  }
}

function viewMoreArticle() {
  viewMoreBtn.textContent =
    viewMoreBtn.textContent === "View More" ? "View Less" : "View More";

  loadMoreArticle.forEach((e) => {
    e.classList.toggle("load-more");
  });
}
