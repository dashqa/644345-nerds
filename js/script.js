var btn = document.querySelector(".btn__feedback");
var popup = document.querySelector(".feedback__modal");
var close = popup.querySelector(".close_window");

var form = popup.querySelector(".feedback__form");
var name = popup.querySelector(".input__contact-name");
var email = popup.querySelector(".input__contact-email");
var msg = popup.querySelector(".input__textarea")

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  contact_name.focus();
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
  else {
    popUp.classList.remove("modal-show");
    popUp.classList.remove("modal-error");
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