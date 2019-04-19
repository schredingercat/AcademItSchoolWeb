"use strict";

var array = [3, 14, 15, 92, 6, 5, 3, 5, 89, 7, 9, 32, 8, 4, 6];
array.sort(function (e1, e2) {
    return e2 - e1;
});
console.log("Массив: " + array.join(", "));

function getFirst(array, itemsNumber) {
    return array.slice(0, itemsNumber);
}
console.log("Первые 5 элементов: " + getFirst(array, 5).join(", "));

function getLast(array, itemsNumber) {
    return array.slice(array.length - itemsNumber);
}
console.log("Последние 5 элементов: " + getLast(array, 5).join(", "));

function getEvens(array) {
    return array.filter(function (n) {
        return n % 2 === 0;
    });
}

var evens = getEvens(array);
console.log("Чётные элементы: " + evens.join(", "));

function getArraySum(array) {
    return array.reduce(function (result, currentItem) {
        return result + currentItem;
    }, 0);
}
console.log("Сумма чётных элементов: " + getArraySum(evens));

function createNumberRangeArray(startIndex, endIndex) {
    var array = [];
    for (var i = startIndex; i <= endIndex; i++) {
        array.push(i);
    }
    return array;
}

var numberRange = createNumberRangeArray(1, 100);
var evensOfRange = getEvens(numberRange);

function powArrayElements(array, pow) {
    return array.map(function (n) {
        return Math.pow(n, pow);
    });
}

console.log("Квадраты чётных чисел от 1 до 100: " + powArrayElements(evensOfRange, 2).join(", "));