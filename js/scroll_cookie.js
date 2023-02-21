import { getCookie, setCookie } from "./cookie.js";

const scroller = document.querySelector(".scroller");

const cookie_pos = getCookie("scroller_pos");
if (cookie_pos) {
  scroller.scrollTo(0, parseInt(cookie_pos));
  scroller.style.top = cookie_pos;
}

scroller.addEventListener("scroll", (e) => {
  setCookie("scroller_pos", scroller.scrollTop, { 'max-age': 3600 });
})