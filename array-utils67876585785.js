// array-utils.js

/**
 * Функция для нахождения суммы элементов массива.
 * @param {number[]} arr - Входной массив.
 * @returns {number} - Сумма элементов массива.
 */
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

/**
 * Функция для умножения каждого элемента массива на заданное число.
 * @param {number[]} arr - Входной массив.
 * @param {number} multiplier - Число, на которое умножаются элементы массива.
 * @returns {number[]} - Новый массив с умноженными значениями.
 */
function multiplyArray(arr, multiplier) {
  return arr.map((val) => val * multiplier);
}

module.exports = {
  sumArray,
  multiplyArray,
};