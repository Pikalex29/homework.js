function getDgitsOfNumber(num) {
    if (Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Значение должно быть внутри диапазона(0 - 999) и являться целым числом.')
        return {}
    }
    return {
        units: num % 10,
        tens: Math.floor(num / 100) % 10,
        hundreds: Math.floor(num / 100),
    }
}

console.log(getDgitsOfNumber(135));