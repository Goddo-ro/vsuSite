import { deleteCookie } from "./cookie.js";

const remove_button = document.querySelector(".remove-image");
const remove_text = document.querySelector(".remove-text");

remove_button.addEventListener("mouseover", (e) => {
  remove_text.style.display = "block";
  remove_text.style.transform = "translate(0)";
  remove_text.innerHTML = "Удалить cookie"
});

remove_button.addEventListener("mouseout", (e) => {
  remove_text.style.display = "none";
});

remove_button.addEventListener("click", (e) => {
  deleteCookie("scroller_pos");

  remove_text.style.transform = "translate(4px)";
  remove_text.innerHTML = "cookie удалены";
})