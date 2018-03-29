var btn = document.querySelector(".btn__feedback");
var popup = document.querySelector(".feedback__modal");
var close = popup.querySelector(".close_window");

var form = popup.querySelector(".feedback__form");
var name = popup.querySelector("[name=user_name]");
var email = popup.querySelector("[name=user_email]");
var msg = popup.querySelector("[name=user_msg]")

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  name.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !msg.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
