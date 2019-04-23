"use strict";

function ready() {
    var button = document.querySelector(".convert-button");

    var convertTemperature = function (e) {
        alert(e);
    };

    button.addEventListener("click", convertTemperature);
}
document.addEventListener("DOMContentLoaded", ready);



console.log("Hello World!");