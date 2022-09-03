"use strict";

/* -------------------------------------------------------------------------- */
/*                         Functionality setup                         */
/* -------------------------------------------------------------------------- */
(function () {
  let buttons = document.querySelectorAll(".button");
  let display = document.querySelector(".display");
  let backspace = document.querySelector(".backspace");
  let clear = document.querySelector(".clear");
  let equal = document.querySelector(".equal");

  // Display functionality
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      display.value += value;
    });
  });

  // Equal functionality
  equal.addEventListener("click", function (e) {
    if (display.value === "") {
      display.value = "";
    } else {
      let result = eval(display.value);
      display.value = result;
    }
  });

  // Clear functionality
  clear.addEventListener("click", function (e) {
    display.value = "";
  });

  // Backspace functionality
  backspace.addEventListener("click", function (e) {
    if (display.value !== "") {
      display.value = display.value.slice(0, -1);
    }
  });
})();
