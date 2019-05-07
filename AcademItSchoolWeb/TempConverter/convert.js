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

        var outputString = celsiusValue + "°С = " + convertCtoK(celsiusValue).toFixed(2) + "K = " + convertCtoF(celsiusValue).toFixed(2) + "°F";
        result.innerText = outputString;
    };

    button.addEventListener("click", convertTemperature);
}

var convertCtoK = function(celsiusValue) {
	return celsiusValue + 273.15;
};

var convertCtoF = function(celsiusValue) {
	return 1.8 * celsiusValue + 32;
};

document.addEventListener("DOMContentLoaded", ready);