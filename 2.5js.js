/**
 * Функция сложения параметров
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function addition(a, b) {
    return a + b
}

/** Вычетание
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function subtraction(a, b) {
    return a - b
}

/** Деление
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function division(a, b) {
    return a / b
}

/** Умножение
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
            defolt:
            throw new Error("Операция" + operation + "не предусмотрена")
    }
}

console.log(mathOperation(3, 9, "+"));
console.log(mathOperation(3, 9, "-"));
console.log(mathOperation(3, 9, "/"));
console.log(mathOperation(3, 9, "*"));
console.log(mathOperation(3, 9, "cop"));