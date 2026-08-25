// let display = document.getElementById(`inputBox`);
// let buttons = document.querySelectorAll(`button`);
// let buttonArray = Array.from(buttons);
// let string = ``;
// buttonArray.forEach((btn) => {
//   btn.addEventListener(`click`, (e) => {
//     if (e.target.innerHTML == `DEL`) {
//       string = string.substring(0, string.length - 1);
//       display.value = string;
//     } else if (e.target.innerHTML == `AC`) {
//       string = ``;
//       display.value=string;
//     } else {
//     }
//   });
// });

let display = document.getElementById(`inputBox`);
let buttons = document.querySelectorAll(`button`);
let buttonArray = Array.from(buttons);
let string = "";
buttonArray.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    // string += e.target.innerHTML;
    // display.innerText=string

    if (e.target.innerHTML == `DEL`) {
      string = string.substring(0, string.length - 1);
      display.innerText = string;
    } else if (e.target.innerHTML == `AC`) {
      string = ``;
      display.innerText = string;
    } else if (e.target.innerHTML == `=`) {
      string = eval(string);
      display.innerText = string;
    } else {
        string += e.target.innerHTML;
      display.innerText = string;
    }
  });
});
