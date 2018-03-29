var btn = document.querySelector(".btn__feedback");
var popup = document.querySelector(".feedback__modal");
var close = popup.querySelector(".close_window");

var form = popup.querySelector(".feedback__form");
var name = popup.querySelector("[name=contact_name]");
var email = popup.querySelector("[name=contact_email]");
var msg = popup.querySelector("[name=contact_msg]")

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

feedback__form.addEventListener("submit", function (evt) {
  if (!contact_name.value || !contact_email.value || !contact_msg) {
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
