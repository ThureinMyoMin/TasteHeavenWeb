const header = document.querySelector("#header");
const burger = document.querySelector(".hamburger");
const burger_bar = document.querySelector(".hamburger_bar");
const ul = document.querySelector("#ul_lists");
const items = document.querySelectorAll("#ul_lists li a");


burger.onclick = function () {
  ul.classList.toggle("active");
  burger_bar.classList.toggle("hamactive");
};
items.forEach((item) => {
  item.onclick = function () {
    burger_bar.classList.toggle("hamactive");
    ul.classList.toggle("active");
  };
});
