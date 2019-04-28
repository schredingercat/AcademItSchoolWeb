"use strict";

function ready() {
    var button = document.getElementById("convertButton");

    var convertTemperature = function (e) {
        var result = document.getElementById("result");

        var input = document.getElementById("tempTextInput");
        var celsiusValue = parseFloat(input.value);
        console.log(celsiusValue);

        if (isNaN(celsiusValue)) {
            result.innerText = "Неверный ввод";
            return;
        }

        if (celsiusValue < -273.15) {
            result.innerText = "Температура не может быть ниже -273.15°С";
            return;
        }

        result.innerText = celsiusValue + "°С = " + (celsiusValue + 273.15) + "K = " + (1.8 * celsiusValue + 32) + "°F";

    };

    button.addEventListener("click", convertTemperature);
}
document.addEventListener("DOMContentLoaded", ready);



console.log("Hello World!");