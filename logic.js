const num = document.querySelectorAll(".btn");
const display = document.getElementById("display");
const btnC = document.getElementsByClassName("btn-C");
const divide = document.getElementsByClassName("btn-divide");
const times = document.getElementsByClassName("btn-times");
const minus = document.getElementsByClassName("btn-minus");
const plus = document.getElementsByClassName("btn-plus");
const equals = document.getElementsByClassName("btn-equals");

num.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.innerText;
  });
});

 if (btnC) {
   btnC[0].addEventListener("click", () => {
     display.value = "";
   });
 }
 if (divide) {
   divide[0].addEventListener("click", () => {
     display.value += "/";
   });
 }
    if (times) {
    times[0].addEventListener("click", () => {
        display.value += "*";
    });
    }
    if (minus) {
    minus[0].addEventListener("click", () => {
        display.value += "-";
    });
    }
    if (plus) {
    plus[0].addEventListener("click", () => {
        display.value += "+";
    });
    }
    if (equals) {
    equals[0].addEventListener("click", () => {
        display.value = eval(display.value);
    });
    }

    