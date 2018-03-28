var btn = document.querySelector(".btn__feedback");
var popup = document.querySelector(".feedback__modal");
var close = popup.querySelector(".close_window");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=contact_name]");
var email = popup.querySelector("[contact_email]");

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  name.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});