"use strict";

let titleText = document.querySelector(".title-text");

let isClick = false;

let btnYes = document.querySelector(".btn-yes");


btnYes.addEventListener("mouseover", () => {
    if(!isClick) {
    let oo = titleText.textContent = "ДААА нажми! нажми!! нажми!!!";
    }
});


btnYes.addEventListener("mouseout", () => {
    if(!isClick) {
        titleText.textContent = "рад ли я шестью месяцам в месте?";
    }
});


btnYes.addEventListener("click", () => {
    isClick = true;

});


btnYes.addEventListener('click', function() {
    window.location.href = "index-html-3.html";
});


let btnNo = document.querySelector(".btn-no");


btnNo.addEventListener("mouseover", () => {
    if(!isClick) {
        titleText.textContent = "Только попробуй нажать!";
    }
});


btnNo.addEventListener("mouseout", () => {
    if(!isClick) {
        titleText.textContent = "рад ли я шестью месяцам в месте?";
    }
});


btnNo.addEventListener("click", () => {
    isClick = true;
    btnNo.style.display = "none";
    titleText.textContent = "что ты кликаешь тут только да";
});