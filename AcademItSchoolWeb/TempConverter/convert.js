"use strict";

function ready() {
    var button = document.getElementById("convertButton");

    var convertTemperature = function () {
        var result = document.getElementById("result");

        var input = document.getElementById("tempTextInput");
        var celsiusValue = parseFloat(input.value.replace(",", "."));

        if (isNaN(celsiusValue)) {
            result.innerText = "Неверный ввод";
            return;
        }

        if (celsiusValue < -273.15) {
            result.innerText = "Температура не может быть ниже -273.15°С";
            return;
        }

        result.innerText = celsiusValue + "°С = " + Math.round((celsiusValue + 273.15) * 100) / 100 + "K = " + Math.round((1.8 * celsiusValue + 32) * 100) / 100 + "°F";
    };

    button.addEventListener("click", convertTemperature);
}

document.addEventListener("DOMContentLoaded", ready);